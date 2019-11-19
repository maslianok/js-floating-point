/**
 * your tests goes here
 * */

import floatingPoint from '../src/index';

describe('floatingPoint module', () => {
  test('0.2 + 0.1', () => {
    expect(0.2 + 0.1).toBe(0.30000000000000004);
    expect(floatingPoint(0.2 + 0.1)).toBe(0.3);
  });

  test('0.3 - 0.1', () => {
    expect(0.3 - 0.1).toBe(0.19999999999999998);
    expect(floatingPoint(0.3 - 0.1)).toBe(0.2);
  });
});
