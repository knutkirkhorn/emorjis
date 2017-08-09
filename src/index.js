$(document).ready(function() {
  const game = new Game();

  $("#start-game-button").click(function() {
    game.startGame();
  });

  $("body").keypress(function(e) {
    //Spacebar key pressed
    if (e.which === 32) {
      game.moveAllWayDown();
    }

    switch (e.keyCode) {
      case 27:
        //Escape key pressed
        game.pauseGame();
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
        //TODO: faster down speed
        break;
    }
  });
});
