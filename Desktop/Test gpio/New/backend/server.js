const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});


const index = require("./routes/index");
app.use(index);

//app.get('/', (req, res) => {
//  res.sendFile(__dirname + '/index.html');
//});


var passages = {
    
}


/*
const { readFileSync, writeFileSync } = require('fs');
const data = readFileSync('./passages.json');
var passages = JSON.parse(data);
console.log('passages', passages)
writeFileSync('./passages.json', JSON.stringify(passages, null, 2), 'utf8');
*/

io.on('connection', (socket) => {
  console.log('a user connected');


  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

  socket.on('passages', (msg) => {
    console.log(msg)
    passages[msg['gpio']] = msg['nb'];
    console.log('passages: ' + msg);
    console.log(passages);
    io.emit('passages', passages);
  });


});


server.listen(8081, () => {
  console.log('listening on *:8081');
});
