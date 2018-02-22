/*
  Напишите функцию, которая параметрами принимает 2 числа и возвращает их сумму
*/
export function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error();
  }
  return a + b;
}

/*
  Напишите функцию, которая возвращает сумму всех чисел, что передаются параметрами
*/
export function sumAll(...rest) {
  return rest.reduce((a, b) => a + b);
}

/*
  Напишите функцию, которая возвращает число x в степень n
*/
export function pow(x, n) {
  if (n === 0) {
    return 1;
  }
  if (n % 2 === 1) {
    return pow(x, n - 1) * x;
  }
  const a = pow(x, n / 2);
  return a * a;
}

/*
  Напишите функцию, которая возвращает рандомное целое число от from до to
*/
export function random(from, to) {
  return Math.floor(from + (Math.random() * (to - from)));
}

export default {
  sum,
  sumAll,
  pow,
  random,
};
