var db = require('./services/dbService');
var session = require('express-session')
/**
 * 後端路由
 */
module.exports = function(app, dirPath) {

    app.get('/', function(req, res) {
        if (!req.session.username) {
            res.redirect('/login');
        } else {
            res.sendfile(dirPath + '/src/views/index.html');
        }
    })

    app.get('/login', function(req, res) {
        res.sendFile(dirPath + '/src/views/login.html');
    })

    app.get('/sign', function(req, res) {
        res.sendFile(dirPath + '/src/views/register.html');
    })

    app.get('/chat', function(req, res) {
        if (!req.session.username) {
            res.redirect('/login');
        } else {
            res.sendFile(dirPath + '/src/views/chat.html');
        }
    })

    app.post('/register', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;

         if (username.length > 8 || username.length < 4) {
            res.json({status: 0, message: "请输入4~8长度的用户名"});
            return;
        }
        if (password == '') {
            res.json({status: 0, message: "密码不能为空"});
            return;
        } 

        db.query('insert into users set ?', {
            id: null,
            username: username,
            password: password
        }, function(err, success) {
            if (err) {
                res.json({status: 0, message: "链接数据库失败"});
                return;
            } else {
                res.json({status: 1, message: "注册成功"});
            }
        })
    })

    app.post('/login', function(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        db.query("select * from users where username = '" + username + "'", function(err, rows) {
            // 数据库异常
            if (err) {
                res.json({status: 0, message: "链接数据库失败"});
                return;
            } 
            // 用户名不存在
            if (rows.length == 0) {
                res.json({status: 0, message: "用户名不存在"});
                return;
            } 
            // 密码不正确
            if (rows[0].password != password) {
                res.json({status: 0, message: "密码不正确"});
                return;
            } 
            req.session.username = username;
            res.json({status: 1, message: "登陆成功"});
        })
    })

  
 
    
};