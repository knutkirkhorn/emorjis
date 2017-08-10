# emorjis

## Installation
Fork this project or download with ```git clone https://github.com/Knutakir/emorjis```
Then navigate to src and run [index.html](***index.html***) in your webbrowser.

## Documentation
To understand how the variable tetrominoPosition receive different position and
shapes from tPos, a little demonstration is shown below:

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
