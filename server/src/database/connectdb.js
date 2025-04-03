// db.js
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    database:'studentmanagement',
    user:'root',
    password:'Sangvu30122002@'
});

connection.connect((err) => {
    if (err) {
        console.log('Error connect:' + err.stack);
        return;
    }
    console.log('Connect successful with ID' + connection.threadId);
});

module.exports = connection;