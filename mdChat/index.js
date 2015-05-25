////////////////////////////////////////////////////////
//Express server used for mdChatRoom project
//Date: 2/23/2015
//Author: Kyle McDonald
////////////////////////////////////////////////////////

var app = require('express')();//server
var http = require('http').Server(app);//listener
var io = require('socket.io')(http);//for connections
var users = [];

  //log a connection to command line
io.on('connection', function (socket) {

  io.emit('current users', users);

  socket.on('user connected', function (name) {
    users.push(name);
    io.emit('current users', users);
  });

  socket.on('posting', function (message) {
    //someone has emitted a posting event
    console.log('Message: ', message);
    //send everyone that message
    io.emit('new message', message);
    });
  console.log('A User has connected');
});

//display chat screen html
app.get('/chatRoom', function (request, response) {
  response.sendfile('chatRoom.html');
});

app.get('/markdown.js', function (request, response) {
  response.sendfile('markdown.js');
});

//http listening for port 3000
http.listen(8000, function () {
  console.log('Server is listening....');
});