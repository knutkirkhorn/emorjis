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
}
//TOOD: fix this so no error is displayed in the console when running
//TODO: check this: module.exports.copy2dArray = (inputArray) => Util.copy2dArray(inputArray);
module.exports = Util;
