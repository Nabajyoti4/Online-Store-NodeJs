const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user:'root',
    database: 'node-complete',
    passowrd: ''

})

module.exports = pool.promise();