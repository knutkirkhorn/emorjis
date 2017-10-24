# emorjis

## Installation
See Installation in [README.md](../README.md#Installation).

## Documentation
To understand how the variable "tetrominoPosition" receive different position and
shapes from "tPos", a little demonstration is shown below:

***Note***: "o" represents a emoji block and "x" represents where there is nothing.
Only the "o"'s are in the code.

### Square (O)
```
┌ o o ┐
└ o o ┘
```

### Stair (S)
```
┌ x o o ┐     ┌ x o x ┐    ┌ x x x ┐    ┌ o x x ┐
| o o x | =>  | x o o | => | x o o | => | o o x |
└ x x x ┘     └ x x o ┘    └ o o x ┘    └ x o x ┘
```

### Stair (Z)
```
┌ o o x ┐     ┌ x x o ┐    ┌ x x x ┐    ┌ x o x ┐
| x o o | =>  | x o o | => | o o x | => | o o x |
└ x x x ┘     └ x o x ┘    └ x o o ┘    └ o x x ┘
```

### Line (I)
```
┌ o o o o ┐     ┌ x x x o ┐     ┌ x x x x ┐     ┌ o x x x ┐
| x x x x | =>  | x x x o | =>  | x x x x | =>  | o x x x |
| x x x x |     | x x x o |     | x x x x |     | o x x x |
└ x x x x ┘     └ x x x o ┘     └ o o o o ┘     └ o x x x ┘
```

### Nail (T)
```
┌ x o x ┐     ┌ x o x ┐    ┌ x x x ┐    ┌ x o x ┐
| o o o | =>  | x o o | => | o o o | => | o o x |
└ x x x ┘     └ x o x ┘    └ x o x ┘    └ x o x ┘
```

### Side-nail (L)
```
┌ x o o ┐     ┌ x x x ┐    ┌ o x x ┐    ┌ o o o ┐
| x x o | =>  | x x o | => | o x x | => | o x x |
└ x x o ┘     └ o o o ┘    └ o o x ┘    └ x x x ┘
```

### Side-nail (J)
```
┌ o o x ┐     ┌ o o o ┐    ┌ x x o ┐    ┌ x x x ┐
| o x x | =>  | x x o | => | x x o | => | o x x |
└ o x x ┘     └ x x x ┘    └ x o o ┘    └ o o o ┘
```

## Javascript Objects and files
This is an explanation of the different javascript files is doing.

### script.js
***script.js*** is the main file and handles jquery mouse and button click events.

### Game.js
***Game.js*** is the main object and handles the speed and state of the game.
This javascript file does create the html table where the emojies are displayed.
#### Functions
* constructor()
* initializeGame()
* getUsername()
* setUsername()
* startGame()
* startNewGame()
* isGameOver()
* isStarted()
* isRunning()
* stopGame()
* pauseGame()
* isPaused()
* resumeGame()
* generateGameBoard()
* clearGameBoard()
* generateNextTetrominoBoard()
* checkIfOnBottomOrOccupied()
* tickClock()
* generateGameArray()
* moveLeft()
* moveRight()
* moveNormal()
* moveFaster()
* rotateTetromino()
* moveAllWayDown()

### Tetromino.js
***Tetromino.js*** is the file that handles the functions for tetromino shapes
and rotations etc.

#### Functions
* constructor(gameScore)
* moveDown()
* changeTetrominoPosition()
* rotateTetromino()
* makeDropFocus()
* generateRandomNextType()
* generateRandomEmoji()
* nextTetromino(bottom)
* sendNewHighScore()
* checkIfRowFull()
* reappearEmojies()
* getNextTetrominoPositions()
* moveHorizontal(toRight)
* moveAllWayDown()

### Util.js
***Util.js*** is the utility file with functions that are used in different files
and are made for easier coding.

#### Functions
* copy2dArray(inputArray)
* removeCurrentEmojies()
* getTableCell(table, row, column)
* hideElement(elementName)
* showElement(elementName)
