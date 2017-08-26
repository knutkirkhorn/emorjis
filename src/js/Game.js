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

let currentGameState;
let gameArray;
let currentTetromino;
let intervalClock;
let currentGameScore;

class Game {
  constructor() {
    this.generateGameBoard();
  }

  initializeGame() {
    currentGameState = GAME_STATE.NOT_STARTED;
    gameArray = [];
    currentGameScore = 0;
    this.generateGameArray();
    this.generateNextTetrominoBoard();
    currentTetromino = new Tetromino(currentGameScore);
    currentTetromino.gameArray = gameArray;
  }

  startGame() {
    this.initializeGame();
    this.resumeGame();
  }

  startNewGame() {
    this.clearGameBoard();
    this.generateGameBoard();
    this.startGame();
  }

  isGameOver() {
    return (currentGameState === GAME_STATE.STOPPED);
  }

  isStarted() {
    return (currentGameState === GAME_STATE.STARTED) ||
           (currentGameState === GAME_STATE.PAUSED);
  }

  isRunning() {
    return (currentGameState === GAME_STATE.STARTED);
  }

  static stopGame() {
    currentGameState = GAME_STATE.STOPPED;
    clearInterval(intervalClock);
  }

  pauseGame() {
    currentGameState = GAME_STATE.PAUSED;
    clearInterval(intervalClock);
  }

  isPaused() {
    return (currentGameState === GAME_STATE.PAUSED);
  }

  resumeGame() {
    currentGameState = GAME_STATE.STARTED;
    intervalClock = setInterval(this.tickClock, DEFAULT_GAME_SPEED);
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

  clearGameBoard() {
    $("#game-board").empty();
  }

  generateNextTetrominoBoard() {
    let gridRow = "<tr>";
    for (let i = 0; i < 4; i++) {
      gridRow += '<td class="empty-cell"></td>';
    }
    gridRow += "</td>";

    for (let i = 0; i < 4; i++) {
      $("#next-tetromino").append(gridRow);
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
    if (currentGameState === GAME_STATE.STARTED) {
      if (Game.checkIfOnBottomOrOccupied()) {
        if (currentTetromino.nextTetromino(true)) {
          //TOOD: fix this.stopGame();
          //TODO: fix $("#message-modal-overlay").removeClass("hidden-element");
        }
      } else {
        currentTetromino.moveDown();
      }
    } else {
      clearInterval(intervalClock);
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
