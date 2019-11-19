/**
 * your code goes here
 * */

export default function floatingPoint(value, recurringSymbols = 6) {
  if (!value || Number.isNaN(parseFloat(value))) {
    // value is wrong or empty
    return value;
  }

  const [intPart, decimalPart] = `${value}`.split('.');

  if (!decimalPart) {
    // no decimal part
    return value;
  }

  const regex = new RegExp(
    `(9{${recurringSymbols},}|0{${recurringSymbols},})(\\d)*$`,
    'gm'
  );
  const matched = decimalPart.match(regex);

  if (!matched) {
    // no floating-point bug
    return value;
  }

  const [wrongPart] = matched;
  const correctDecimalsLength = decimalPart.length - wrongPart.length;
  return parseFloat(
    parseFloat(`${intPart}.${decimalPart}`).toFixed(correctDecimalsLength)
  );
}
