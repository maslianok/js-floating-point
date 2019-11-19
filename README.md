# The problem

Floating-point numbers are represented as binary fractions. Regrettably, most decimal fractions cannot be represented exactly as binary fractions. The decimal floating-point numbers you enter are only approximated by the binary floating-point numbers actually stored in the machine. That being said, you'll see that floating-point arithmetic is NOT 100% accurate.

```
0.2 + 0.1
0.30000000000000004

0.3 - 0.1
0.19999999999999998

1111.11 + 1111.11 + 1111.11 + 1111.11 + 1111.11
5555.549999999999
```

The full article https://www.avioconsulting.com/blog/overcoming-javascript-numeric-precision-issues

# The solution

All existing solutions suggest us to round the number to some predefined amount of decimal digits. Simply said, to use `.toFixed(N)`. But what if I don't know how many digits do I need?

Another solution is to use the `Math.js` library https://mathjs.org/docs/datatypes/bignumbers.html#roundoff-errors

Really? Do I have to pull a huge library to resolve so common problem?

I couldn't believe that there is no some simple solution to resolve the problem so I wrote my own dead-simple and lightning-fast solution:

```js
const [intPart, decimalPart] = `${value}`.split('.');
const matched = decimalPart.match(/(9{6,}|0{6,})(\\d)*$/gm);

if (!matched) {
  // no floating-point bug
  return value;
}

const [wrongPart] = matched;
const correctDecimalsLength = decimalPart.length - wrongPart.length;
const result = parseFloat(`${intPart}.${decimalPart}`).toFixed(
  correctDecimalsLength
);
```

To make it clear: the function is trying to find N repeating `0`s or `9`s and, if such sequence is found, it removes it rounding the last correct digit. That's all!

Just look at tests

# Installation

```
yarn add js-floating-point
```

# Usage

```js
import floatingPointFix from 'js-floating-point';

0.2 + 0.1;
// WRONG: 0.30000000000000004

floatingPointFix(0.2 + 0.1);
// CORRECT: 0.3

0.3 - 0.1;
// WRONG: 0.19999999999999998

floatingPointFix(0.3 - 0.1);
// CORRECT: 0.2
```
