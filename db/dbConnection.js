const mysql  = require('mysql2');

const dbConnection = mysql.createPool({
    host: process.env['host'],
    user: process.env['user'],
    database: process.env['database'],
    password: process.env['password']
});

module.exports = dbConnection;