$(document).ready(function() {
  const game = new Game();

  $("#start-game-button").click(function() {
    game.startGame();
  });

  let isFastSpeed = false;

  $("body").keypress(function(e) {
    //Spacebar key pressed
    if (e.which === 32) {
      game.moveAllWayDown();
    }

    switch (e.keyCode) {
      case 27:
        //Escape key pressed
        if (game.isPaused()) {
          game.resumeGame();
          $("#pause-modal-overlay").addClass("modal-hidden");
        } else {
          game.pauseGame();
          $("#pause-modal-overlay").removeClass("modal-hidden");
        }
        break;
      case 37:
        //Left key pressed
        game.moveLeft();
        break;
      case 38:
        //Up key pressed
        game.rotateTetromino();
        break;
      case 39:
        //Right key pressed
        game.moveRight();
        break;
      case 40:
        //Down key pressed
        if (!isFastSpeed) {
          isFastSpeed = true;
          game.moveFaster();
        }
        break;
    }
  }).keyup(function(e) {
    if (e.keyCode === 40) {
      if (isFastSpeed) {
        isFastSpeed = false;
        game.moveNormal();
      }
    }
  });

  $("#resume-game-button").click( () => {
    game.resumeGame();
    $("#pause-modal-overlay").addClass("modal-hidden");
  });
});
