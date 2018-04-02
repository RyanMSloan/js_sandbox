////////////////////////
// Logging to console
////////////////////////

///////////////////////////////////////////////////
// Lecture 6
console.log('\nLecture 6\n');
console.log('Hello');
console.log(123);
console.log(true);
var greeting = 'Welcome...'
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({apple:1, bird:2, cat:3});
console.table({a:1,b:2,c:3});

console.error('This is not an error!');
console.clear();
console.warn('This a warning');

// console.time('Loop');
//   for(var i = 0; i < 100; i++){
//     console.log(i);
//   }
// console.timeEnd('Loop');
console.time('Loop');
  var i = 0;
  while(i < 10){
    console.log(i);
    i++;
  }
console.timeEnd('Loop');

// Object w/ const
const person = {
  name: 'Ryan',
  age: 36
}
console.log(person);
person.name = 'Jamie';
person.age = 34;
console.log(person);

// Array w/ const
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6);
console.log(numbers);

///////////////////////////////////////////////////
// Lecture 7
console.log('\n ---- Lecture 7 ----\n');

// PRIMITIVE TYPES
console.log('\nPRIMITIVE TYPES typeof');

const name = 'John Doe';
console.log(typeof name);
const age = 35;
console.log(typeof age);
const hasKids = false;
console.log(typeof hasKids);
const car = null;
console.log(typeof car);
let transgender;
console.log(typeof transgender);

// REFERENCE TYPES - Objects
console.log('\nPRIMITIVE TYPES typeof');
// Array
const hobbies = ['motocross', 'gaming'];
console.log(typeof hobbies);
// Object literal
const address = {
  address: '123 Main St',
  city: 'San Diego',
  state: 'CA'
}
console.log(typeof address);
// Date
const today = new Date();
console.log(today);
console.log(typeof today);

///////////////////////////////////////////////////
// Lecture 8
console.log('\n ---- Lecture 8 ----\n');
console.log(' - Type Conversion');

let val;

// Number to string
val = 5;
val = String(5);
val = String(4+10);
// Bool to string
val = String(true);
// Date to string
val = String(new Date);
// Array to string
val = String([1,2,3,4]);

// toString()
val = (123).toString();
val = (true).toString();

// String to number
val = '5'; // error when run through .toFixed()
val = Number('5'); // ok
// Bool/null to number
val = Number(true);
val = Number(false);
val = Number(null);
// String with letters
val = Number('hello'); // NaN
// Array
val = Number([1,2,3]); // NaN

// Parse
val = parseInt('100.30');
val = parseFloat('100.30');

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length); // strings only
console.log(val.toFixed(2)); // numbers [can mod values with params.  decimal->(2)]

console.log('\n - Type Coercion');

// Type coercion 
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

