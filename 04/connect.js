var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0EB1EB03EDA5E58D7C891EDB107E5769',
    database: 'upload_image'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected success ! ');
});

module.exports = connection;