
var express = require('express');
var app = express();
var server = require('http').createServer(app);
app.use(express.static(__dirname + '/'));
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on('message', function (data) {
    socket.broadcast.emit('message', {
      message: data
    });
  });
});
server.listen(3000);
