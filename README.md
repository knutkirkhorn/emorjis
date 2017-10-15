# emorjis [![Build Status](https://travis-ci.org/Knutakir/emorjis.svg?branch=master)](https://travis-ci.org/Knutakir/emorjis) [![dependencies Status](https://david-dm.org/knutakir/emorjis/status.svg)](https://david-dm.org/knutakir/emorjis)
Emoji Tetris 😎 made with javascript, mysql, express, css and html

## Installation
```
$ git clone https://github.com/Knutakir/emorjis
```

The server has stored its database configuration in the [db-config.json](db-config.json)
file and it needs to be updated to the users correct database.
The database script [database.sql](database.sql) needs to be run in a database before starting the server aswell.

### Install dependencies 
```
$ npm install
```
### Run
```
$ npm start
```

## Screenshots
![Preview](media/screenshot-1.png)

### Menu
![Preview](media/screenshot-2.png)

### Game over
![Preview](media/screenshot-3.png)

## Controls
* <kbd>←</kbd> to navigate left and <kbd>→</kbd> to navigate right.
* <kbd>↑</kbd> to rotate the tetromino clockwise.
* <kbd>↓</kbd> to move tetromino faster.
* <kbd>Space</kbd> to drop the tetromino all the way down.
* <kbd>Escape</kbd> to pause the game and view a menu.

## Score system
In emorjis you get score from:
* Letting a tetromino drop all the way down, you only get a score of 10.
* Move a tetromino all the way down(triggered by pressing <kbd>Space</kbd>).
Score is calculated by how many rows you move down. The score is the number of rows to move down multiplied with 10.
  * Example: move 7 rows down: 7 × 10 = 70
* Clear rows. You get 100 base score multiplied with number of rows cleared powered.
  * Example: 2 rows cleared = 100 × 2² = 400

## Documentation
See [src/README.md](src/README.md) for a explenation of some of the code.

## Licence
MIT © Knut Kirkhorn
