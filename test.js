import test from 'ava';
import Util from './src/js/Util';

const arrayToCopy = [];
for (let i = 0; i < 5; i++) {
  arrayToCopy.push([1, 1, 1]);
}

test('Check copying of arrays', t => {
  const newArray = Util.copy2dArray(arrayToCopy);
  t.deepEqual(newArray, arrayToCopy);
  t.pass();
});
