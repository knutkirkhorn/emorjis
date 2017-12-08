const GAME_STATE = {
  NOT_STARTED: 0,
  STARTED: 1,
  PAUSED: 2,
  STOPPED: 3
}
const BOARD_HEIGHT = 17;
const BOARD_WIDTH = 10;

let currentGameState;
let gameArray;
let currentTetromino;
let currentGameScore;
let username;

class Game {
  constructor() {
    this.generateGameBoard();
  }

  pauseGame() {
    //TODO: implement
  }

  generateGameBoard() {
    let gridRow = '<tr>';
    for (let i = 0; i < BOARD_WIDTH; i++) {
      gridRow += '<td class="empty-cell"></td>';
    }
    gridRow += '</tr>';

    for (let i = 0; i < BOARD_HEIGHT; i++) {
      $('#game-board').append(gridRow);
    }
  }
}
