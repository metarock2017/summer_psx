var db = require('../connect');
var app = require('express')();
var http = require('http').Server(app);


/* GET home page. */
module.exports = function(app) {
    app.get('/', function(req, res) {
        if (!req.session.users) {
            res.sendfile('views/login.html');
            } else {
            res.sendfile('views/chat.html');
        }
    })

    app.get('/reg', function(req, res) {
        res.sendfile('views/reg.html');
    })

    app.get('/chat', function(req, res) {
        res.sendfile('views/chat.html');
    })

    app.post('/reg', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        db.query('insert into users set ?', {
            id: null,
            username: username,
            password: password
        }, function(err, success) {
            if (err) {
                console.log(err);
                res.send('注册失败');
            } else {
                res.send('注册成功');
                console.log(success);
            }
        })
    })

    app.post('/login', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        console.log(username);
        db.query("select * from users where username = '" + username + "'", function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                console.log(rows);
                if (rows.length == 0) {
                    res.send('用户名不存在');
                } else {
                    console.log(rows[0].password);
                    if (rows[0].password == password) {
                        req.session.user = username;
                            res.send('登录成功');
                    } else {
                        res.send('登录失败');
                    }
                }
            }
        })

    })

  
    // io.on('connection', function(socket) {
    //     console.log('a user connected');
    // });

    
};