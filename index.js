const WebSocket = require('ws');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dbConfig = require('./db-config.json');

const app = express();
const wss = new WebSocket.Server({ port: 8080 });

app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));

let connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

connection.connect( (error) => {
  if (error) {
    console.log(error);
  }
  console.log("Connected successfully to emorjis database");
});

app.post('/highscore/', (request, response) => {
  const username = request.body.username;
  const score = request.body.score;

  connection.query('SELECT user_id FROM Users WHERE username = ?', [username], (error, result, fields) => {
    if (!error && result.length !== 0) {
      const userId = result[0].user_id;

      connection.query('INSERT INTO Highscore(score, user_id) VALUES(?, ?)', [score, userId], (error, result, fields) => {
        if (!error) {
          response.send("New highscore added");
        } else {
          response.sendStatus(404);
        }
      });
    } else {
      response.sendStatus(404);
    }
  });
});

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {

  });
});

app.listen(80, () => {
    console.log('emorjis running at port 80!');
});
