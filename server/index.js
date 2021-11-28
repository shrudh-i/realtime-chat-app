const socketio = require('socket.io')
const express = require('express');
const http = require('http');
const cors = require('cors')
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const { ExpressPeerServer } = require('peer');
const router = require('./router');
io = socketio(server);

const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use('/peerjs', peerServer);
app.use(router);
app.use(cors());

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

app.use(express.json());

const _dirname = path.resolve();
app.use(express.static(path.join(_dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, '/client/build/index.html'));
});

io.on('connection', (socket) => {
  console.log(' user connected', socket.id);
  socket.on('join-room', (roomId, userId) => {
    console.log(roomId, userId);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit('user-connected', userId);

    socket.on('message', ({ message, userId }) => {
      console.log(message, userId);
      io.to(roomId).emit('createMessage', message, userId);
    });

    // When User Disconnected
    socket.on('disconnect', (userId) => {
      socket.broadcast.to(roomId).emit('user-disconnected', userId);
    });
  });
});


server.listen(port, () => {
  console.log(`Running on Port: ${port}`);
});
