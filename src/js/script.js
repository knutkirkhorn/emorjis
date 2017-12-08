$(document).ready(function() {
  const socket = new WebSocket('ws://localhost:8080');
  const game = new Game();
  let isFastSpeed = false;
  let username;

  socket.onerror = (error) => {

  }

  socket.onopen = (message) => {
    socket.send("open");
  }

  socket.onmessage = (e) => {
    console.log(e.data);
    //TODO: switch different types of messages e.g.:
    // * update of game array
  }

  socket.onclose = (message) => {

  }

  function pauseGame() {
    //TODO: implement
  }

  function resumeGame() {
    //TODO: implement
  }

  function newGame() {
    //TODO: implement
  }

  //TODO: cleanup this part



  $.get('/highscore', (data) => {
    for (let i = 0; i < data.length; i++) {
      let newItem = '<tr>';
      newItem += '<td>' + (i+1) + '.</td>';
      newItem += '<td></td>';
      newItem += '<td>' + data[i].score + '</td></tr>';
      $('#highscore-panel tbody').append(newItem);
      $('#highscore-panel tbody td:nth(1)').text(data[i].username);
    }
  });

  $('#change-game-state-button').click(function() {
    // if (game.isStarted()) {
    //   if (game.isRunning()) {
    //     //game.pauseGame();
    //     Util.showElement("pause-modal-overlay");
    //     $(this).text("Resume Game");
    //   } else {
    //     game.resumeGame();
    //     Util.hideElement("pause-modal-overlay");
    //     $(this).text("Pause Game");
    //   }
    // } else {
    //   if (game.isGameOver()) {
    //     //game.startNewGame();
    //     $(this).text("Pause Game");
    //   } else {
    //     game.startGame();
    //     Util.showElement("next-tetromino-container");
    //     Util.showElement("score-container");
    //     $(this).text("Pause Game");
    //   }
    // }
    // $(this).blur();
  });

  $('body').keydown( (e) => {
    // if (game.isRunning()) {
    //   //Spacebar key pressed
    //   if (e.which === 32) {
    //     game.moveAllWayDown();
    //   }
    //
    //   switch (e.keyCode) {
    //     case 27:
    //       //Escape key pressed
    //       if (game.isPaused()) {
    //         game.resumeGame();
    //         Util.hideElement("pause-modal-overlay");
    //         $("#change-game-state-button").text("Pause Game");
    //       } else {
    //         game.pauseGame();
    //         Util.showElement("pause-modal-overlay");
    //         $("#change-game-state-button").text("Resume Game");
    //       }
    //       break;
    //     case 37:
    //       //Left key pressed
    //       game.moveLeft();
    //       break;
    //     case 38:
    //       //Up key pressed
    //       game.rotateTetromino();
    //       break;
    //     case 39:
    //       //Right key pressed
    //       game.moveRight();
    //       break;
    //     case 40:
    //       //Down key pressed
    //       if (!isFastSpeed) {
    //         isFastSpeed = true;
    //         game.moveFaster();
    //       }
    //       break;
    //   }
    // }
  }).keyup(function(e) {
    // if (game.isRunning()) {
    //   if (e.keyCode === 40) {
    //     if (isFastSpeed) {
    //       isFastSpeed = false;
    //       game.moveNormal();
    //     }
    //   }
    // }
  });

  $('#resume-game-button').click( () => {
    // game.resumeGame();
    Util.hideElement('pause-modal-overlay');
    $('#change-game-state-button').text('Pause Game');
  });

  $("#start-new-game-button").click( () => {
    // game.startNewGame();
    Util.hideElement('pause-modal-overlay');
    $('#change-game-state-button').text('Pause Game');
  });

  $('#game-over-button').click( () => {
    Util.hideElement('message-modal-overlay');
  });

  $('#show-controls-button').click( () => {
    Util.showElement('controls-modal-overlay');
  });

  $('#hide-controls').click( () => {
    Util.hideElement('controls-modal-overlay');
  });

  $('#select-username-button').click( () => {
    const newUsername = $('#username-input').val();
    if (newUsername) {
      username = newUsername;
      Util.showElement('username-box');
      $('#username-text').text(username);
      $('#username-modal').addClass('modal-fadeout');
      $('#username-modal-overlay').fadeOut();

      const xmphttp = new XMLHttpRequest();
      xmphttp.open('POST', '/user');
      xmphttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xmphttp.send(JSON.stringify({
        username: username
      }));
      //game.setUsername(username);
    } else {
      alert('Your username can not be blank.');
      //TODO: make custom alert box
    }
  });

  $('#username-input').keyup( (e) => {
    //Enter key pressed
    if (e.keyCode === 13) {
      $('#select-username-button').click();
    }
  });
});
