var http = require('http');
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

var server = http.createServer(app);

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

server.listen(port, function() {
    console.log("Listening on %j", server.address());
});