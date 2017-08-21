var path = require('path');
var routes = require('./server/routes');
var bodyParser = require('body-parser');
var express =require('express');
var session = require('express-session')
var io = require('socket.io')(http);

var app = new(require('express'))()
var port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use('/libs', express.static('src/libs'));
app.use('/static', express.static('src/static'));

routes(app, __dirname);



var http = require('http').Server(app);
var io = require('socket.io')(http);


io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
   
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
