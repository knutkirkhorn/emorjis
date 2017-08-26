//module.exports =
class Util {
  static copy2dArray(inputArray) {
    let newArray = new Array(inputArray.length);

    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = [inputArray[i].length];
      for (let j = 0; j < inputArray[i].length; j++) {
        newArray[i][j] = inputArray[i][j];
      }
    }
    return newArray;
  }

  static removeCurrentEmojies() {
    $(".current-tetromino").each(function() {
      $(this).removeClass("current-tetromino").html("");
    });

    $(".bottom-drop-place").each(function() {
      $(this).removeClass("bottom-drop-place");
    });
  }

  static getTableCell(table, row, column) {
    return $("#" + table + " tr:nth-child(" + row + ") td:nth-child(" + column + ")");
  }

  static hideElement(elementName) {
    $("#" + elementName).addClass("hidden-element");
  }

  static showElement(elementName) {
    $("#" + elementName).removeClass("hidden-element");
  }
}

//TOOD: fix this so no error is displayed in the console when running
module.exports.copy2dArray = (inputArray) => Util.copy2dArray(inputArray);
