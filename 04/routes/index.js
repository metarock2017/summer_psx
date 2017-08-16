var express = require('express');
var db = require('../connect');

/* GET home page. */
module.exports = function(app) {

    app.get('/', function(req, res) {
        res.sendfile('views/index.html')
    });

    app.post('/upload', function(req, res) {
        var id = req.body.id;
        if (req.body.id == 1) {
            var data = req.body.content;
            var name = req.body.name;
            var size = req.body.size;
            db.query('insert into image set ?', {
                id: null,
                content: data,
                size: size,
                name: name
            }, function(err, sucess) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(sucess)
                }
            })
        } else {
            var con = req.body.content;
            var _name = req.body.name;
            console.log(_name);
            db.query("select concat(content, 'con') from image where name = '_name'", function(err, sucess) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(sucess)
                }
            })
        }

        res.json({
            "message": Math.random()
        })
    })
}