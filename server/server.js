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

app.use(express.static(__dirname + '/public'));

app.get('/test', (req, res) => {
  res.sendStatus(200);
})

io.on('connection', (socket) => {
  console.log(socket.id);
})

io.on('move', (socket, data) => {
  console.log(`${socket.id} moved to ${data}`);

  io.emit('moving', { data, id: socket.id });
})

// app.listen(port, () => console.log('App running on port:', port));
httpServer.listen(port);