const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  }
});

const port = 5000 || process.env.PORT;

app.use(express.static(__dirname + '/public'));

// app.get('/test', (req, res) => {
//   res.sendStatus(200);
// })

io.on('connection', (socket) => {
  console.log(socket);
})

// app.listen(port, () => console.log('App running on port:', port));
httpServer.listen(port);