const express = require('express');
const { createServer } = require('node:http');
const path = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(join(__dirname,'public' ,'index.html'));
});


io.on('connection', (socket) => {
  console.log("user connected");
  
  socket.on('chat message', (msg) => {
    console.log(msg);
  });
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});