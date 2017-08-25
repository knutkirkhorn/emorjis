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
const maxBoardSize = 17;
const defaultStartPosition = [0, 3];
const maxEndRight = 9;
const maxEndLeft = 0;
const defaultScore = 10;
const clearRowScore = 100;

let currentEmojiType;
let currentTetrominoType;
//tPos = tetrominoPosition with [row, column], a definition of
//where the tetromino starts
let tPos = [0, 3];
let tetrominoState;
let tetrominoPositions;
let gameScore = 0;

class Tetromino {
  constructor(gameScore) {
    tetrominoState = 1;
    currentEmojiType = EMOJIES[this.generateRandomEmoji()];
    currentTetrominoType = this.generateRandomNextType();
    this.changeTetrominoPosition();
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

  changeTetrominoPosition() {
    switch (currentTetrominoType) {
      case TETROMINO_TYPE.O:
        switch (tetrominoState) {
          default:
            //Because this tetromino is only one form regardless of rotation
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0], tPos[1]+1],
                                  [tPos[0]+1, tPos[1]], [tPos[0]+1, tPos[1]+1]];
        }
        break;
      case TETROMINO_TYPE.S:
        switch (tetrominoState) {
          case 1:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0], tPos[1]+2],
                                [tPos[0]+1, tPos[1]], [tPos[0]+1, tPos[1]+1]];
            break;
          case 2:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0]+1, tPos[1]+1],
                              [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+2]];
            break;
          case 3:
            tetrominoPositions = [[tPos[0]+1, tPos[1]+1], [tPos[0]+1, tPos[1]+2],
                              [tPos[0]+2, tPos[1]], [tPos[0]+2, tPos[1]+1]];
            break;
          case 4:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0]+1, tPos[1]],
                              [tPos[0]+1, tPos[1]+1], [tPos[0]+2, tPos[1]+1]];
            break;
        }
        break;
      case TETROMINO_TYPE.Z:
        switch (tetrominoState) {
          case 1:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0], tPos[1]+1],
                                [tPos[0]+1, tPos[1]+1], [tPos[0]+1, tPos[1]+2]];
            break;
          case 2:
            tetrominoPositions = [[tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]+1],
                              [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+1]];
            break;
          case 3:
            tetrominoPositions = [[tPos[0]+1, tPos[1]], [tPos[0]+1, tPos[1]+1],
                              [tPos[0]+2, tPos[1]+1], [tPos[0]+2, tPos[1]+2]];
            break;
          case 4:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0]+1, tPos[1]],
                              [tPos[0]+1, tPos[1]+1], [tPos[0]+2, tPos[1]]];
            break;
        }
        break;
      case TETROMINO_TYPE.I:
        switch (tetrominoState) {
          case 1:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0], tPos[1]+1],
                                [tPos[0], tPos[1]+2], [tPos[0], tPos[1]+3]];
            break;
          case 2:
            tetrominoPositions = [[tPos[0], tPos[1]+3], [tPos[0]+1, tPos[1]+3],
                              [tPos[0]+2, tPos[1]+3], [tPos[0]+3, tPos[1]+3]];
            break;
          case 3:
            tetrominoPositions = [[tPos[0]+3, tPos[1]], [tPos[0]+3, tPos[1]+1],
                              [tPos[0]+3, tPos[1]+2], [tPos[0]+3, tPos[1]+3]];
            break;
          case 4:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0]+1, tPos[1]],
                              [tPos[0]+2, tPos[1]], [tPos[0]+3, tPos[1]]];
            break;
        }
        break;
      case TETROMINO_TYPE.T:
        switch (tetrominoState) {
          case 1:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0]+1, tPos[1]],
                                [tPos[0]+1, tPos[1]+1], [tPos[0]+1, tPos[1]+2]];
            break;
          case 2:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0]+1, tPos[1]+1],
                              [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+1]];
            break;
          case 3:
            tetrominoPositions = [[tPos[0]+1, tPos[1]], [tPos[0]+1, tPos[1]+1],
                              [tPos[0]+1, tPos[1]+2], [tPos[0]+2, tPos[1]+1]];
            break;
          case 4:
            tetrominoPositions = [[tPos[0], tPos[1]+1], [tPos[0]+1, tPos[1]],
                              [tPos[0]+1, tPos[1]+1], [tPos[0]+2, tPos[1]+1]];
            break;
        }
        break;
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
      case TETROMINO_TYPE.J:
        switch (tetrominoState) {
          case 1:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0], tPos[1]+1],
                                  [tPos[0]+1, tPos[1]], [tPos[0]+2, tPos[1]]];
            break;
          case 2:
            tetrominoPositions = [[tPos[0], tPos[1]], [tPos[0], tPos[1]+1],
                                  [tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]+2]];
            break;
          case 3:
            tetrominoPositions = [[tPos[0], tPos[1]+2], [tPos[0]+1, tPos[1]+2],
                                  [tPos[0]+2, tPos[1]+1], [tPos[0]+2, tPos[1]+2]];
            break;
          case 4:
            tetrominoPositions = [[tPos[0]+1, tPos[1]], [tPos[0]+2, tPos[1]],
                                  [tPos[0]+2, tPos[1]+1], [tPos[0]+2, tPos[1]+2]];
            break;
        }
    }
  }

  rotateTetromino() {
    if (tetrominoState === 4) {
      tetrominoState = 1;
    } else {
      tetrominoState++;
    }
    this.changeTetrominoPosition();

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
      this.changeTetrominoPosition();
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

  generateNextTetrominoBox() {
    let gridRow = "<tr>";
    //TODO: generate the box in the html for the next tetromino
    /*for (let i = 0; i < BOARD_WIDTH; i++) {
      gridRow += '<td class="empty-cell"></td>';
    }
    gridRow += "</tr>";*/

    for (let i = 0; i < BOARD_HEIGHT; i++) {
      $("#next-tetromino").append(gridRow);
    }
  }

  generateRandomNextType() {
    const randomNumber = Math.floor(Math.random() * TETROMINO_TYPE_SIZE);
    return randomNumber;
  }

  generateRandomEmoji() {
    const randomEmojiNumber = Math.floor((Math.random() * EMOJIES_SIZE));
    return randomEmojiNumber;
  }

  nextTetromino(bottom) {
    if (bottom) {
      gameScore += 10;
    }

    for (let i = 0; i < tetrominoPositions.length; i++) {
      const row = tetrominoPositions[i][0];
      const column = tetrominoPositions[i][1];
      gameArray[row][column] = EMOJIES.indexOf(currentEmojiType);
    }

    $(".current-tetromino").each(function() {
      $(this)
        .removeClass("current-tetromino")
        .addClass("occupied-cell")
        .removeClass("empty-cell");
    });

    this.checkIfRowFull();

    currentEmojiType = EMOJIES[this.generateRandomEmoji()];

    //Add and start new brick
    tPos[0] = defaultStartPosition[0];
    tPos[1] = defaultStartPosition[1];

    currentTetrominoType = this.generateRandomNextType();
    this.changeTetrominoPosition();
    this.reappearEmojies();
  }

  checkIfRowFull() {
    const cellsInOneRow = gameArray[0].length;
    let rowsToDelete = [];

    for (let i = 0; i < gameArray.length; i++) {
      let fullCellsInRow = 0;
      for (let j = 0; j < 10; j++) {
        if (gameArray[i][j] >= 0) {
          fullCellsInRow++;
        }
      }

      if (fullCellsInRow === 10) {
        rowsToDelete.push(i);
      }
    }

    for (let i = 0; i < rowsToDelete.length; i++) {
      gameArray.splice(rowsToDelete[i], 1);
      gameArray = [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],...gameArray];
    }

    gameScore += clearRowScore * rowsToDelete.length;
  }

  reappearEmojies() {
    $(".bottom-drop-place").each(function() {
      $(this).removeClass("bottom-drop-place");
    });

    $(".occupied-cell").each(function() {
      $(this).removeClass("occupied-cell").html("").addClass("empty-cell");
    });

    for (let i = 0; i < gameArray.length; i++) {
      for (let j = 0; j < gameArray[i].length; j++) {
        const currentValue = gameArray[i][j];
        if (currentValue >= 0) {
          //Add emoji to table
          Util.getTableCell(i+1, j+1).addClass("occupied-cell").html(EMOJIES[currentValue]);
        }
      }
    }

    for (let i = 0; i < tetrominoPositions.length; i++) {
      const row = tetrominoPositions[i][0] + 1;
      const column = tetrominoPositions[i][1] + 1;

      Util.getTableCell(row, column)
        .addClass("current-tetromino")
        .html(currentEmojiType);
      gameArray[row-1][column-1] = -2;
    }
    this.makeDropFocus();

    $("#current-score").text(gameScore);
  }

  moveHorizontal(toRight) {
    //TODO: console.log(gameArray);
    //Check if most left or right
    let isAtEnd = false;
    let endPosition;
    if (toRight) {
      endPosition = maxEndRight;
    } else {
      endPosition = maxEndLeft;
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
      //move tetromino right/left
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

  moveAllWayDown() {
    let tempTetrominoPositions = Util.copy2dArray(tetrominoPositions);
    let notFoundBottom = true;
    let scoreMultiplier = 15;

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
          if (scoreMultiplier === 15) {
            scoreMultiplier = i;
          }
        }
      }

      if (notFoundBottom) {
        tempTetrominoPositions = Util.copy2dArray(tempTetrominoPositions2);
      }
    }
    tetrominoPositions = Util.copy2dArray(tempTetrominoPositions);

    console.log(scoreMultiplier);
    gameScore += scoreMultiplier * 10;

    Util.removeCurrentEmojies();
    this.reappearEmojies();
    this.nextTetromino(false);
  }
}
