// destructing.js
/*
const props = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop5: {
    key1: 'ssss',
    key2: 'aaaa',
  },
};

const {
  prop1,
  prop3,
  prop6 = 'value6',
  prop5: { key1: var1 },
} = props;
console.log(prop1);
console.log(prop3);
console.log(prop6);
console.log(var1);
*/

/*

const foo = () => ({ asd: 'lkla' });
foo();
console.log(JSON.stringify(foo(), null, 5));

const woo = (p1 = 'bb', ...rest) => ({ asd1: p1, asd2: 'valval2', rest });

const retval = woo('b', 'a', 'r', 'k', 'i', 'n');
console.log(retval);
console.log(JSON.stringify(retval, null, 2));
*/

/*
reduxta cok kullanılır adını unuttum

const array = [2, 3, 51, 12, 3, 5];
console.log(...array);
const [a1, a2, a3, ...rest] = array;
console.log(rest);
console.log(...rest);

*/

/*
array filter mukemmel birsey

const arr = ['b', 'a', 'r', 'k', 'n', 'M', 'e', 'r', 'v'];
const newAwesomeArr = arr.filter(item => item > 'h');
console.log(newAwesomeArr);

*/

/*
//mapping bu da super

const arr = ['b', 'a', 'r', 'k', 'n', 'M', 'e', 'r', 'v'];
const bla = arr.map(item => item.toUpperCase());

const animals = [
  {
    type: 'mammal',
    id: 1,
  },
  {
    type: 'lizard',
    id: 2,
  },
  {
    type: 'bla',
    id: 3,
  },
];
console.log(animals.map(animal => animal.id));

*/

/*
reduce
const arr = ['b', 'a', 'r', 'k', 'n', 'M', 'e', 'r', 'v'];
const marge = arr.reduce((prev, curr) => `${prev} ${curr}`, 'Sez');
console.log(marge);
*/

/*
yeni string operasyonları

const a = 'm';
const s = 'e';
// eskiden a + ' ' + s idi simdi
console.log(`${a} ${s}`);
console.log(`koyunlar ne der? ${a}${s}`);
*/

/*
array every butun hepsi o kurala uyuyor mu uymuyor mu
array some var o da buna benziyor

const arr = ['b', 'a', 'r', 'k', 'n', 'M', 'e', 'r', 'v'];
const bool = arr.every(char => char > 'Z');
console.log(bool);

*/

/*
property shorthand AMMAAAAN MUTHIS MUTHIS BIRSEY
const name = 'BB';

const people = {
  id: 0,
  bla: name,
  name,
};
console.log(people);

 */

/*
Veritabanı gelen columnların ismi ile property yapabiliyoruz artık
computed property names redux icin muthis olacak

const name = 'BB';
const people = {
  id: 0,
  bla: name,
  name,
};
console.log(people);
const key = 'id';
const user = {
  [key]: 1,
  name: 'BARKIN',
};
console.log(user);
*/
/*

const obj = {
  A: 'val1',
  B: 'val2',
  C: 'val3',
};
// airbnbde yasakmıs digerlerinde serbest for of

// eslint-disable
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`);
}
*/
