/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */

const myObj = {
  name: 'DimOk',
  surname: 'Pilavsky',
  favoriteNumber: 55
}

const myString = `My name is ${myObj.name} ${myObj.surname} and my favorite number is ${myObj.favoriteNumber}`

console.log(myString)
