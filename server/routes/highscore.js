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
    console.log('Connected successfully to highscore database');
  }
});

router.get('/', (request, response) => {
  connection.query('SELECT score, username FROM Highscore JOIN Users ON(Highscore.user_id = Users.user_id) ORDER BY score DESC LIMIT 10', (error, result, fields) => {
    if (!error && result.length !== 0) {
      let jsonResponse = [];
      for (let i = 0; i < result.length; i++) {
        jsonResponse.push({
          username: result[i].username,
          score: result[i].score
        });
      }
      response.json(jsonResponse);
    }
  });
});

router.post('/', (request, response) => {
  const username = request.body.username;
  const score = request.body.score;

  connection.query('SELECT user_id FROM Users WHERE username = ?', [username], (error, result, fields) => {
    if (!error && result.length !== 0) {
      const userId = result[0].user_id;

      connection.query('INSERT INTO Highscore(score, user_id) VALUES(?, ?)', [score, userId], (error, result, fields) => {
        if (!error) {
          response.send('New highscore added');
        } else {
          response.sendStatus(404);
        }
      });
    } else {
      response.sendStatus(404);
    }
  });
});

module.exports = router;
