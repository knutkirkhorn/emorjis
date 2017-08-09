const TETROMINO_TYPE_SIZE = 7;
const TETROMINO_TYPE = {
  O: 0,
  S: 1,
  Z: 2,
  I: 3,
  T: 4,
  L: 5,
  J: 6
};
const EMOJIES_SIZE = 5;
const EMOJIES = ['😂', '🐶', '🔥', '🚪', '🍂'];

let currentEmojiType = '😂';
let currentTetrominoType = TETROMINO_TYPE.L;

let matrixSize = 3;
const maxBoardSize = 17;

//tetrominoPosition with [row, column], a definition of
//where the tetromino starts
let tPos = [0, 3];
let tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+2]];
let tetrominoState = 1;

class Tetromino {
  constructor(state) {
    if (state === undefined) {
      this.state = 1;
    } else {
      this.state = state;
    }
    this.tetrominoType = this.generateRandomNextType();
    this.reappearEmojies();
  }

  moveDown() {
    Util.removeCurrentEmojies();

    //Move all emojies down one row
    for (let i = 0; i < tetrominoPositions.length; i++) {
      tetrominoPositions[i][0]++;
    }
    tPos[0]++;
    this.reappearEmojies();
  }

  rotateTetromino() {
    if (tetrominoState === 4) {
      tetrominoState = 1;
    } else {
      tetrominoState++;
    }

    switch (currentTetrominoType) {
      case TETROMINO_TYPE.L:
        switch (tetrominoState) {
          case 1:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0], tPos[1]+2],
                                  [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+2]];
            break;
          case 2:
            tetrominoPositions = [[tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]],
                                  [tPos[0]+2, tPos[1]+1], [tPos[0]+2, tPos[1]+2]];
            break;
          case 3:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0]+1, tPos[1]],
                                  [tPos[0]+2, tPos[1]], [tPos[0]+2, tPos[1]+1]];
            break;
          case 4:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0], tPos[1]+1],
                                  [tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]]];
            break;
        }
        break;
    }

    let blocked = false;
    for (let i = 0; i < tetrominoPositions.length; i++) {
      if (tetrominoPositions[i][1] === -1 || tetrominoPositions[i][1] === 10) {
        blocked = true;
      }

      const row = tetrominoPositions[i][0] + 1;
      const column = tetrominoPositions[i][1] + 1;
      if (Util.getTableCell(row, column).hasClass('occupied-cell')) {
        blocked = true;
      }
    }

    if (blocked) {
      tetrominoState--;
    }

    switch (currentTetrominoType) {
      case TETROMINO_TYPE.L:
        switch (tetrominoState) {
          case 1:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+2]];
            break;
          case 2:
            tetrominoPositions = [[tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]], [tPos[0]+2, tPos[1]+1], [tPos[0]+2, tPos[1]+2]];
            break;
          case 3:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0]+1, tPos[1]], [tPos[0]+2, tPos[1]], [tPos[0]+2, tPos[1]+1]];
            break;
          case 4:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0], tPos[1]+1], [tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]]];
            break;
        }
        break;
    }

    Util.removeCurrentEmojies();
    this.reappearEmojies();
  }

  makeDropFocus() {
    let tempTetrominoPositions = Util.copy2dArray(tetrominoPositions);
    let notFoundBottom = true;

    while (notFoundBottom) {
      let tempTetrominoPositions2 = Util.copy2dArray(tempTetrominoPositions);
      for (let i = 0; i < tempTetrominoPositions2.length; i++) {
        tempTetrominoPositions2[i][0]++;
        const column = tempTetrominoPositions2[i][1] + 1;
        const row = tempTetrominoPositions2[i][0] + 1;
        const tableCell = Util.getTableCell(row, column);

        if (tableCell.hasClass("occupied-cell")) {
          notFoundBottom = false;
        }

        if (tableCell.attr('class') === undefined) {
          notFoundBottom = false;
        }
      }

      if (notFoundBottom) {
        tempTetrominoPositions = Util.copy2dArray(tempTetrominoPositions2);
      }
    }

    for (let i = 0; i < tempTetrominoPositions.length; i++) {
      const column = tempTetrominoPositions[i][1] + 1;
      const row = tempTetrominoPositions[i][0] + 1;
      Util.getTableCell(row, column).addClass("bottom-drop-place");
    }
  }

  moveAllWayDown() {
    let tempTetrominoPositions = Util.copy2dArray(tetrominoPositions);
    let notFoundBottom = true;

    for (let i = 0; i < 15; i++) {
      let tempTetrominoPositions2 = Util.copy2dArray(tempTetrominoPositions);

      for (let j = 0; j < tempTetrominoPositions2.length; j++) {
        tempTetrominoPositions2[j][0]++;
        const column = tempTetrominoPositions2[j][1] + 1;
        const row = tempTetrominoPositions2[j][0] + 1;
        const tableCell = Util.getTableCell(row, column);

        if (tableCell.attr('class') === undefined ||
            tableCell.hasClass("occupied-cell")) {
          notFoundBottom = false;
        }
      }

      if (notFoundBottom) {
        tempTetrominoPositions = Util.copy2dArray(tempTetrominoPositions2);
      }
    }
    tetrominoPositions = Util.copy2dArray(tempTetrominoPositions);

    Util.removeCurrentEmojies();
    this.reappearEmojies();
    this.nextTetromino();
  }

  generateRandomNextType() {
    const randomNumber = Math.floor((Math.random() * TETROMINO_TYPE_SIZE) + 1);

    switch (randomNumber) {
      case TETROMINO_TYPE.O:

        break;

      case TETROMINO_TYPE.S:

        break;

      case TETROMINO_TYPE.Z:

        break;

      case TETROMINO_TYPE.L:

        break;
      default:

    }

    return TETROMINO_TYPE.L;
  }

  nextTetromino() {
    for (let i = 0; i < tetrominoPositions.length; i++) {
      const row = tetrominoPositions[i][0];
      const column = tetrominoPositions[i][1];
      gameArray[row][column] = currentTetrominoType;
    }

    $(".current-tetromino").each(function() {
      $(this)
        .removeClass("current-tetromino")
        .addClass("occupied-cell")
        .removeClass("empty-cell");
    });

    const randomEmojiNumber = Math.floor((Math.random() * EMOJIES_SIZE));
    currentEmojiType = EMOJIES[randomEmojiNumber];

    //Add and start new brick
    tPos = [0, 3];
    tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+2]];
    this.reappearEmojies();
  }

  reappearEmojies() {
    for (let i = 0; i < tetrominoPositions.length; i++) {
      const row = tetrominoPositions[i][0] + 1;
      const column = tetrominoPositions[i][1] + 1;

      $(".bottom-drop-place").each(function() {
        $(this).removeClass("bottom-drop-place");
      });

      Util.getTableCell(row, column)
        .addClass("current-tetromino")
        .html(currentEmojiType);
    }

    this.makeDropFocus();
  }

  moveHorizontal(toRight) {
    //Check if most left or right
    let isAtEnd = false;
    let endPosition;
    if (toRight) {
      endPosition = 9;
    } else {
      endPosition = 0;
    }

    for (let i = 0; i < tetrominoPositions.length; i++) {
      if (tetrominoPositions[i][1] === endPosition) {
        isAtEnd = true;
        break;
      }
    }

    $(".current-tetromino").each(function() {
      if (toRight) {
        if ($(this).next().hasClass('occupied-cell')) {
          isAtEnd = true;
        }
      } else {
        if ($(this).prev().hasClass('occupied-cell')) {
          isAtEnd = true;
        }
      }

    });

    if (!isAtEnd) {
      //move table
      if (toRight) {
        tPos[1]++;
        for (let i = 0; i < tetrominoPositions.length; i++) {
          tetrominoPositions[i][1]++;
        }
      } else {
        tPos[1]--;
        for (let i = 0; i < tetrominoPositions.length; i++) {
          tetrominoPositions[i][1]--;
        }
      }

      Util.removeCurrentEmojies();
      this.reappearEmojies();
    }
  }
}
