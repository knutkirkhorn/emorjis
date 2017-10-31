import test from 'ava';
import Util from './server/util';
import Tetromino from './server/Tetromino';
import Game from './server/Game';

const arrayToCopy = [];
for (let i = 0; i < 5; i++) {
  arrayToCopy.push([1, 1, 1]);
}

test(t => {
  const newArray = Util.copy2dArray(arrayToCopy);
  t.deepEqual(newArray, arrayToCopy);
  t.pass();
});

//TODO: make tests for Game and Tetromino classes
