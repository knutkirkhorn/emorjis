import test from 'ava';
import game from './src/js/Game';
import tetromino from './src/js/Tetromino'
import util from './src/js/Util';

test('foo', t => {
  t.pass();
});

const arrayToCopy = [];
for (let i = 0; i < 5; i++) {
  arrayToCopy.push([1, 1, 1]);
}

test(t => {
  const newArray = Util.copy2dArray(copy2dArray);
  t.deepEqual(newArray, arrayToCopy, 'yay');
  t.pass();
});

//test()
