'use strict';
const mysql = require('mysql');
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'inventory'
});

db.connect((err) => {
    if (err) throw err;
});

module.exports = db;