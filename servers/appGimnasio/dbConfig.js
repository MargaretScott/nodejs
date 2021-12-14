const mysql = require('mysql2');

// console.log('Configuro Base de datos');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'mysqlpassword',
    port: 3306,
    database: 'gimnasio'
});

global.db = pool;