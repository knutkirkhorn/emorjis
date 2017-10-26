const express = require('express');
const router = express.Router();

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
