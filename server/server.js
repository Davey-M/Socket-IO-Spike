const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.PUBLIC_URL || "http://localhost:3000",
  }
});

const port = process.env.PORT || 5000;

app.use(express.static('build'));

app.get('/test', (req, res) => {
  res.sendStatus(200);
})

let players = [];

io.on('connection', (socket) => {
  // console.log(socket.id);

  socket.join('room');

  players.push({ id: socket.id, x: 0, y: 0 });

  io.emit('new-player', players);

  socket.on('move', (data) => {
    // console.log(`${socket.id} moved to ${JSON.stringify(data)}`);

    players = players.map(player => {
      if (player.id === socket.id) {
        player.x = data.x
        player.y = data.y
      }

      return player;
    })

    io.emit('new-player', players);
  })

  socket.conn.on('close', () => {
    players = players.filter(player => player.id !== socket.id);
    io.emit('new-player', players);
  })
})

// app.listen(port, () => console.log('App running on port:', port));
httpServer.listen(port);