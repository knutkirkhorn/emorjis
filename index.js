const WebSocket = require('ws');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const dbConfig = require('./db-config.json');
const game = require('./server/Game');
const Tetromino = require('./server/Tetromino');
const Util = require('./server/Util');
const highscore = require('./server/routes/highscore.js');
const user = require('./server/routes/user.js');

const app = express();
const wss = new WebSocket.Server({ port: 8080 });

app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));

//Setup routes
app.use('/highscore/', highscore);
app.use('/user/', user);

let connections = [];
//On websocket connection
wss.on('connection', function connection(ws) {
  // ws.send("hello");
  connections.push(ws);
  ws.send(JSON.stringify(
    {
      type: "gameArray",
      content: "replaceThis"
    }
  ));

  ws.on('message', function incoming(message) {
    console.log(message);
  });

  ws.on('close', function() {
    console.log("connection closed");
    connections.splice(connections.indexOf(ws));
    console.log(connections.length);
    //connections.
  });
});

app.listen(80, () => {
    console.log('emorjis running at port 80!');
});
