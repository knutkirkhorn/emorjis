const GAME_STATE = {
  NOT_STARTED: 0,
  STARTED: 1,
  PAUSED: 2,
  STOPPED: 3
}
const BOARD_HEIGHT = 17;
const BOARD_WIDTH = 10;

let currentGameState = GAME_STATE.RUNNING;
let gameArray = [];
let currentTetromino;

class Game {
  constructor() {
    this.initializeGame();
  }

  initializeGame() {
    this.generateGameBoard();
    this.generateGameArray();
    currentTetromino = new Tetromino();
  }

  startGame() {
    currentGameState = GAME_STATE.STARTED;
    /*setInterval(function() {
      this.tickClock()
    }, 1000);*/
    setInterval(this.tickClock, 1000);
  }

  stopGame() {
    currentGameState = GAME_STATE.STOPPED;
  }

  pauseGame() {
    currentGameState = GAME_STATE.PAUSED;
  }

  generateGameBoard() {
    let gridRow = "<tr>";
    for (let i = 0; i < BOARD_WIDTH; i++) {
      gridRow += '<td class="empty-cell"></td>';
    }
    gridRow += "</tr>";

    for (let i = 0; i < BOARD_HEIGHT; i++) {
      $("tbody").append(gridRow);
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
      currentTetromino.nextTetromino();
    } else {
      currentTetromino.moveDown();
    }
  }

  checkIfRowFull() {
    const cellsInOneRow = gameArray[0].length;

    for (let i = 0; i < gameArray.length; i++) {
      let fullCellsInRow = 0;
      for (let j = 0; j < 10; j++) {
        /*if () {
          fullCellsInRow++;
        }*/
      }

      if (fullCellsInRow === 10) {
        //TODO: REMOVE and drop rows over;
      }
    }
  }

  generateGameArray() {
    for (let i = 0; i < 17; i++) {
      gameArray.push([], [], [], []);
    }
  }

  moveLeft() {
    currentTetromino.moveHorizontal(false);
  }

  moveRight() {
    currentTetromino.moveHorizontal(true);
  }

  rotateTetromino() {
    currentTetromino.rotateTetromino();
  }

  moveAllWayDown() {
    currentTetromino.moveAllWayDown();
  }
}
