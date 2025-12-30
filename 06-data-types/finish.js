/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const string = 'string';
const number = 77;
const boolean = true;
const myNull = null;
let isUndefined;

const myObject = {
  bornAge: 1986,
  city: 'St-Petersburg'
};

const myArray = [1, 6, 7, 8];

console.log(typeof string);
console.log(typeof number);
console.log(typeof boolean);
console.log(typeof myNull);
console.log(typeof isUndefined);
console.log(typeof myObject);
console.log(typeof myArray);
