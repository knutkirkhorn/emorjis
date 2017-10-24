class Util {
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
