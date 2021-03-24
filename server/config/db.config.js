'use strict';
const mariadb = require('mariadb');

//local mysql db connection
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'karisma125',
  connectionLimit: 5,
  port: 3307,
  database: "pokemon"
});

pool.getConnection()
  .then(conn => {
    if(conn) console.log("Database Connected !!")
  }).catch(err => {
    console.log("Database not connected");
    conn.end();
  })

module.exports = pool;