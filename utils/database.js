const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'playo_api',
    password: ''
});

module.exports = pool.promise();