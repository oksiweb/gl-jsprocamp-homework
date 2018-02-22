import lesson2 from '../lesson2/';

const {
  sum,
  sumAll,
  pow,
  random,
} = lesson2.task;

describe('sum function', () => {
  test('sum works good', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 2)).toBe(4);
    expect(sum(0, 0)).toBe(0);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-5, 1)).toBe(-4);
    expect(() => sum(NaN, 1)).toThrow();
    expect(() => sum(NaN, NaN)).toThrow();
    expect(() => sum('1', 1)).toThrow();
  });
});


describe('sumAll function', () => {
  test('sumAll works good', () => {
    expect(sumAll(1, 2, 3)).toEqual(6);
    expect(sumAll(1, 2, 3, 4, 5)).toEqual(15);
    expect(sumAll(1, -2, -3, 4, 5)).toEqual(5);
    expect(sumAll(0, 0, -3, 0, 0)).toEqual(-3);
    expect(sumAll(0, 0, 0, 0, 0)).toEqual(0);
  });
});


describe('pow function', () => {
  test('pow works good', () => {
    expect(pow(2, 2)).toEqual(4);
    expect(pow(2, 4)).toEqual(16);
    expect(pow(0, 1)).toEqual(0);
    expect(pow(0, 0)).toEqual(1);
    expect(pow(1, 0)).toEqual(1);
    expect(pow(10, 1)).toEqual(10);
  });
});

describe('random function', () => {
  test('random works good', () => {
    expect(random(1, 10)).not.toEqual(11);
    expect(random(1, 10)).not.toEqual(0);
  });
});
