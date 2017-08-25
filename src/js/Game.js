const GAME_STATE = {
  NOT_STARTED: 0,
  STARTED: 1,
  PAUSED: 2,
  STOPPED: 3
}
const BOARD_HEIGHT = 17;
const BOARD_WIDTH = 10;
const DEFAULT_GAME_SPEED = 1000;
const FAST_GAME_SPEED = 500;

let currentGameState = GAME_STATE.RUNNING;
let gameArray = [];
let currentTetromino;
let intervalClock;
let currentGameScore = 0;

class Game {
  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    this.generateGameBoard();
    this.generateGameArray();
    currentTetromino = new Tetromino(currentGameScore);
    currentTetromino.gameArray = gameArray;
  }

  startGame() {
    currentGameState = GAME_STATE.STARTED;
    intervalClock = setInterval(this.tickClock, DEFAULT_GAME_SPEED);
  }

  stopGame() {
    currentGameState = GAME_STATE.STOPPED;
  }

  pauseGame() {
    currentGameState = GAME_STATE.PAUSED;
    clearInterval(intervalClock);
  }

  isPaused() {
    return (currentGameState === GAME_STATE.PAUSED);
  }

  resumeGame() {
    this.startGame();
  }

  newGame() {
    //TODO: start new game
    //TODO: clear game board
    this.generateGameBoard();
    this.generateGameArray();
  }

  generateGameBoard() {
    let gridRow = "<tr>";
    for (let i = 0; i < BOARD_WIDTH; i++) {
      gridRow += '<td class="empty-cell"></td>';
    }
    gridRow += "</tr>";

    for (let i = 0; i < BOARD_HEIGHT; i++) {
      $("#game-board").append(gridRow);
    }
  }

  static checkIfOnBottomOrOccupied() {
    let isBottomOrOccupied = false;

    $(".current-tetromino").each(function() {
      const column = $(this).index();

      //Check if the brick is on the bottom
      if ($($(this).parent().next().children()[column]).attr('class') === undefined) {
        isBottomOrOccupied = true;
        return true;
      }

      //check if there is an occupied-cell under the current tetromino
      if ($($(this).parent().next().children()[column]).attr('class').includes('occupied-cell')) {
        isBottomOrOccupied = true;
        return true;
      }
    });
    return isBottomOrOccupied;
  }

  tickClock() {
    if (Game.checkIfOnBottomOrOccupied()) {
      currentTetromino.nextTetromino(true);
    } else {
      currentTetromino.moveDown();
    }
  }

  generateGameArray() {
    for (let i = 0; i < BOARD_HEIGHT; i++) {
      gameArray.push([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
    }
  }

  moveLeft() {
    currentTetromino.moveHorizontal(false);
  }

  moveRight() {
    currentTetromino.moveHorizontal(true);
  }

  moveNormal() {
    clearInterval(intervalClock);
    intervalClock = setInterval(this.tickClock, DEFAULT_GAME_SPEED);
  }

  moveFaster() {
    clearInterval(intervalClock);
    intervalClock = setInterval(this.tickClock, FAST_GAME_SPEED);
  }

  rotateTetromino() {
    currentTetromino.rotateTetromino();
  }

  moveAllWayDown() {
    currentTetromino.moveAllWayDown();
  }
}
