/*
  Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
const getDataType = variable => typeof variable;

/*
  Напишите функцию, которая принимает 1 аргумент и возвращает:
  'primitive' если тип данных относится к примивным
  'primitive-special' если тип данных специальный
  'object' - если простой обьект
  'object-array' - если массив
  'object-function' - если функция
*/
function getDataTypePseudoName(variable) {
  if (typeof variable === 'number' || typeof variable === 'string' || typeof variable === 'boolean') {
    return 'primitive';
  } else if (variable === undefined || variable === null) {
    return 'primitive-special';
  } else if (Array.isArray(variable)) {
    return 'object-array';
  } else if (typeof variable === 'function') {
    return 'object-function';
  }
  return 'object';
}


/*
  Напишите функцию, которая принимает 2 аргумента,
  и возврвщает 1 если их значения и их типы равны,
  0 если равны только значения
  и -1 в другом случае
*/
function compareByType(a, b) {
  if (a === b) {
    return 1;
  } else if (a == b) {
    return 0;
  }
  return -1;
}

// Numbers

/*
  Напишите функцию, которая принимает 1 аргумент,
  и в случае если аргумент имеет числовой тип увеличивает его на 1
  и возврвщвет результат,
  в любом другом случае возврвщвет -1
*/
function increase(value) {
  return (typeof value === 'number') ? value + 1 : -1;
}

/*
  Напишите функцию, которая принимает 1 аргумент(число),
  и в случае если аргумент не Infinity или NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber(value) {
  return typeof value === 'number' && Number.isFinite(value) ? 'safe' : 'danger';
}


// Strings

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает массив из елементов строки разделенных по пробелу ' '
*/
const stringToArray = str => str.split(' ');

/*
  Напишите функцию, которая принимает 1 аргумент (строку),
  и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
  const [first] = str.split(',');
  return first;
}

/*
  Напишите функцию, которая принимает 2 аргумента (строку и симовл),
  и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
  false в противоположном случае
*/
function isSingleSymbolMatch(str, symbol) {
  const position = str.indexOf(symbol);
  return (str.indexOf(symbol, position + 1) === -1 && position >= 0) ? position : false;
}

/*
  Напишите функцию, которая принимает 2 аргумента,
  массив в разделитель[опционально],
  и возвращает строку ввиде элементов массива c разделителями если разделитель задан
  или строку разделенную "-" если не задан
*/
const join = (array, separator) => array.join(separator || '-');


/*
  Напишите функцию, которая принимает 2 массива,
  и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
const glue = (arrA, arrB) => [...arrA, ...arrB];

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой массив отсортированный от большего к меньшему
*/
const order = arr => arr.sort().reverse();

/*
  Напишите функцию, которая принимает 1 массив,
  и возвращает другой без чисел которые меньше 0
*/
const removeNegative = arr => arr.filter(item => item >= 0);

/*
  Напишите функцию, которая принимает 2 числовых массива,
  и возвращает новый массив, состоящий из элементов первого но без элементов
  которые присутствуют во втром
  [1,2,3], [1, 3] => [2]
*/
function without(arrA, arrB) {
  return arrA.filter(item => arrB.indexOf(item) === -1);
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение математической операции с двумя
  операндами (поддерживаются 4 базовых оператора + - / *).
  Функция вычисляет выражение и возвращает число либо NaN.
  '12/6' => 2
*/
function calcExpression(expression) {
  const re = /(-?\d+)([*+-/])(-?\d+)/;
  try {
    const newExp = expression.replace(/\s*/g, '').match(re);
    const [, a, b, c] = Array.from(newExp);
    let result;
    switch (b) {
      case '+':
        result = a + c;
        break;
      case '-':
        result = a - c;
        break;
      case '*':
        result = a * c;
        break;
      case '/':
        result = a / c;
        break;
      default:
        result = NaN;
    }
    return result;
  } catch (e) {
    return NaN;
  }
}

/*
  Напишите функцию, которая принимает строку,
  содержащую выражение логической операции с двумя
  операндами (поддерживаются 5 базовых операторов > < = >= <=).
  Функция вычисляет выражение и возвращает true / false,
  либо бросает exception в случае ошибки.
  '100>5' => true
*/

function calcComparison(expression) {
  try {
    if (!expression.includes('>') && !expression.includes('<')) {
      return (new Function(`return (${expression.replace('=', '===')})`))();
    }
    return (new Function(`return (${expression})`))();
  } catch (error) {
    throw error;
  }
}

/*
  Напишите функцию, которая принимает обьект и строку,
  содержащую выражение доступа к свойствам обьекта.
  Функция возвращает значение запрашиваемого свойства либо
  бросает exception в случае ошибки.
  { a: { x: 2 }, b: 5 }, '.a.x' => 2
  { a: 1, b: 2 }, '.c' => exception
*/
function evalKey(obj, expression) {
  const arr = expression.replace(/\s/g, '').split('.');
  const [first, ...rest] = arr;

  if (first !== '') {
    throw new Error();
  }

  const s = rest.map(x => `['${x}']`).join('');

  const result = eval(`obj${s}`);
  if (result === undefined) {
    throw new Error();
  }
  return result;
}

export default {
  getDataType,
  getDataTypePseudoName,
  compareByType,
  increase,
  testForSafeNumber,
  stringToArray,
  getStringPart,
  isSingleSymbolMatch,
  join,
  glue,
  order,
  removeNegative,
  without,
  calcExpression,
  calcComparison,
  evalKey,
};
