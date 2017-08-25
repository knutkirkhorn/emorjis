const WebSocket = require('ws');
const express = require('express');

const app = express();
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {

  });
});

app.use(express.static(__dirname + '/src'));
app.listen(80, () => {
    console.log('emorjis running at port 80!');
});
