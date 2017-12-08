const mysql = require('mysql');
const dbConfig = require('./../../db-config.json');
const express = require('express');
const router = express.Router();

let connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port
});

connection.connect( (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected successfully to user database");
  }
});

router.post('/', (request, response) => {
  const username = request.body.username;

  connection.query('SELECT * FROM Users WHERE username = ?', [username], (error, result, fields) => {
    if (!error && result.length !== 0) {
      response.send("Username already exist");
    } else {
      connection.query('INSERT INTO Users(username, password) VALUES(?, "TODO")', [username], (error, result, fields) => {
        if (!error) {
          response.send("New username added");
        } else {
          response.sendStatus(404);
        }
      });
    }
  });
});

module.exports = router;
