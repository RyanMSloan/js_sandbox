////////////////////////
// Logging to console
////////////////////////

/*                         Line #
Variables                  - 24
Data Types                 - 69
Type Conversion            - 104
Numbers & Math obj         - 157
String Methods & concat    - 194
Template Literals          - 266
Array & Array Methods      - 299
Object Literals            - 359
Date & Times               - 405
If & Comparison Operators  - 434
Switches                   -
Function Dev & Expressions -
General Loops              -
The Window Object          -
Block Scope w/ let & const -
*/

///////////////////////////////////////////////////
// Lecture 6
console.log('\n---- Lecture 6 - Console Log Funcs ----\n');
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
console.log('\n ---- Lecture 7 - Prim/Ref Types ----\n');

// PRIMITIVE TYPES
console.log('\n- PRIMITIVE TYPES typeof');

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
console.log('\n- REFERENCE TYPES typeof');
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
console.log('\n ---- Lecture 8 - Type Conversion ----\n');

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

console.log('\n- Type Coercion');

// Type coercion 
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

///////////////////////////////////////////////////
// Lecture 9
console.log('\n ---- Lecture 9 - Math Operators ----\n');

const num1 = 100;
const num2 = 40;

// Simple math with number
console.log('- Simple math with number');
let simpleMath;

simpleMath = num1 + num2;
simpleMath = num1 - num2;
simpleMath = num1 * num2;
simpleMath = num1 / num2;
simpleMath = num1 % num2
console.log(simpleMath);

console.log('\n- Math Objects');
let objectMath;
 
objectMath = Math.PI;
objectMath = Math.E;
objectMath = Math.round(2.4);
objectMath = Math.ceil(2.4);
objectMath = Math.floor(2.7);
objectMath = Math.sqrt(1024);
objectMath = Math.pow(16, 3); //(root, power)
objectMath = Math.cos(1/2);
objectMath = Math.abs(-5);
objectMath = Math.min(43,32,61,26,75,25);
objectMath = Math.max(43,32,61,26,75,25);
objectMath = Math.random();

objectMath = Math.floor(Math.random() * 100 + 1);
console.log(objectMath);

///////////////////////////////////////////////////
// Lecture 10
console.log('\n ---- Lecture 10 - String methods/concats ----\n');

const firstName = 'James';
const lastName = 'William';
const age1 = 36;
const str = 'Hello there, my name is Ryan.';
const tags = 'JavaScript,PHP,MongoDB,MySQL,C++';

// Concatenation
console.log('- Concatenation');
let concatVal;

concatVal = firstName + lastName;
concatVal = firstName + ' ' + lastName;
concatVal = 'Hi, my name is ' + firstName + ' and I am ' + age1;
console.log(concatVal);

// Append
console.log('\n- Append');
let appendVal = 'Ryan ';
appendVal += 'Sloan';
console.log(appendVal);

// Escaping
console.log('\n- Escaping');
let escapeVal = 'That\'s awesome, I can\'t wait!';
console.log(escapeVal);

// String properties and methods
console.log('\n- MORE String properties and methods');
// Length
let string1 = firstName.length;

// concat
string1 = firstName.concat(' ', lastName);

// Case change
string1 = firstName.toUpperCase();
string1 = firstName.toLocaleLowerCase();

// string as ro array
string1 = firstName[0];

// indexOf
string1 = lastName.indexOf('l');
string1 = lastName.lastIndexOf('a');

// charAt
string1 = lastName.charAt(1);
// get last char
string1 = lastName.charAt(lastName.length - 1);

// substring
string1 = firstName.substr(1, 3);

// slice
string1 = firstName.slice(0, 4);
string1 = firstName.slice(-3);

// Split
string1 = str.split(' ');
string1 = tags.split(',');

// replace
string1 = str.replace('Ryan', 'Bob');

// includes
string1 = str.includes('Hell');
console.log(string1);

///////////////////////////////////////////////////
// Lecture 11
console.log('\n ---- Lecture 11 - Template Literals ----\n');
console.log('See document page ^');

const templateName = 'Jeffrey';
const templateAge = 40;
const templateJob = 'Web Developer';
const templateCity = 'San Diego';

let intro = document.getElementById('template');

// Without template literals (es5)
intro.innerHTML = '<ul><li>'+templateName+'</li>'+
                  '<li>'+templateAge+'</li>'+
                  '<li>'+templateJob+'</li>'+
                  '<li>'+templateCity+'</li>';

// With template literals (es6)
function hello(){
  return 'HELLO';
}

intro.innerHTML = `<ul>
                    <li>Name: ${templateName}</li>
                    <li>Age: ${templateAge}</li>
                    <li>Job: ${templateJob}</li>
                    <li>City: ${templateCity}</li>
                    <li>2 + 2 = ${2+2}</li>
                    <li>From a function: ${hello()}</li>
                    <li>Under 40? ${templateAge < 40 ? 'under 40' : '40 or older'}</li>
                  </ul>`;

///////////////////////////////////////////////////
// Lecture 12
console.log('\n ---- Lecture 12 - Arrays ----\n');

const numbers1 = [12,34,51,5];
const numbers2 = new Array(23,42,424,45);
const fruit = ['Apple', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];

let arrayVal;

// Get array length
arrayVal = numbers1.length;
// Check if is array
arrayVal = Array.isArray(mixed);
// Get single val from Array
arrayVal = fruit[1];
// Insert into Array
numbers1[3] = 999;
// Find index of value
arrayVal = numbers1.indexOf(999);

// MUTATING ARRAYS
// Add on to END
// numbers1.push(250);
// // Add on to BEGINNING
// numbers1.unshift(123);
// // Take off from end
// numbers1.pop();
// // Take off from beginning
// numbers1.shift();
// // Splice values
// numbers1.splice(1, 2);
// // Reverse
// numbers1.reverse();

// Concatenate Arrays
arrayVal = numbers1.concat(numbers2);

// Sorting
arrayVal = fruit.sort();
arrayVal = numbers1.sort(); // doesnt work as expected
// to sort numbers correctly, use the "compare function"
arrayVal = numbers1.sort(function(x, y){
  return x - y;
});
// Reverse sort
arrayVal = numbers1.sort(function(x, y){
  return y - x;
});

// Find
function under50(num){
  return num < 50;
}
arrayVal = numbers1.find(under50);

console.log(numbers1);
console.log(arrayVal);

///////////////////////////////////////////////////
// Lecture 13
console.log('\n ---- Lecture 13 - Object Literals ----\n');

// Standard Object
const person2 = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'blah@goo.com',
  hobbies: ['MX', 'Gaming', 'Hiking', 'Web Dev'],
  address: {
    city: 'Portland',
    state: 'ME'
  },
  getBirthYear: function(){
    let dateObj = new Date();
    return dateObj.getFullYear() - this.age;
  }
}

let objVal;

objVal = person2.email;
// good for arrays - Math.ceil(Math.random() * person2.hobbies.length - 1)
objVal = person2.hobbies[Math.ceil(Math.random() * person2.hobbies.length - 1)];
objVal = person2.address.city;
console.log(objVal);

// Array of Objects
const people = [
  {name: 'Phillip'},
  {name: 'Bob'},
  {name: 'Jill'},
  {name: 'Jessica'}
]
console.log(people);
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

people.forEach(person => {
  console.log(person.name);
  
});

///////////////////////////////////////////////////
// Lecture 14
console.log('\n ---- Lecture 14 - Date & Times ----\n');

let dateVal;

const date = new Date();
let birthday = new Date('7-17-1981 11:25:00');
birthday = new Date('7/17/1981 11:59:00');

dateVal = birthday;
dateVal = date.getDate();
dateVal = date.getDay();
dateVal = date.getFullYear();
dateVal = date.getHours();
dateVal = date.getMinutes();
dateVal = date.getSeconds();
dateVal = date.getMilliseconds();
dateVal = date.getTime(); // how many seconds passed since some date. good for timestamp?
console.log(dateVal);

birthday.setMonth(0);
birthday.setDate(1);
birthday.setFullYear(0000);
birthday.setHours(0);
birthday.setMinutes(0);
birthday.setSeconds(01);
console.log(birthday);

///////////////////////////////////////////////////
// Lecture 15
console.log('\n ---- Lecture 15 - If & Comparison Operators ----\n');
// if(something){
//   do something
// } else{
//   do something else
// }

const id = 100;

// // EQUAL TO
// if (id == 100) {
//   console.log('YEP'); 
// }else{
//   console.log('NOPE');
// }

// // NOT EQUAL TO
// if (id != 101) {
//   console.log('YEP'); 
// }else{
//   console.log('NOPE');
// }

// // EQUAL TO VALUE AND TYPE
// if (id === 101) {
//   console.log('YEP'); 
// }else{
//   console.log('NOPE');
// }

// // NOT EQUAL TO VALUE AND TYPE
// if (id !== 100) {
//   console.log('YEP'); 
// }else{
//   console.log('NOPE');
// }

// test if undefined
if(typeof id !== 'undefined'){
  console.log(`The ID is ${id}`)
}else{
  console.log('NO ID');
}

// GREATER OR LESS THAN
if (id >= 100) {
  console.log('YEP'); 
}else{
  console.log('NOPE');
}


// ELSE IF()
const color = 'blue';

if (color === 'red') {
  console.log('Color is red');
}else if(color === 'green'){
  console.log('Color is green');
}else{
  console.log('Color is neither red or green. It must be '+color);
}

// LOGIC OPERATORS
const logName = 'Steve';
const logAge = 16;

// AND &&
if(logAge > 0 && logAge <= 12){
  console.log(`${logName} is a child`);
} else if(logAge > 12 && logAge < 21){
  console.log(`${logName} is a juvenile`);
} else {
  console.log(`${logName} is an adult`);
}

// OR ||
if (logAge < 16 || logAge > 65){
  console.log(`${logName} can not run in the Boston Marathon`);
} else {
  console.log(`${logName} is within the age restrictions to complete in the Boston Marathon`);
}

// TERNARY OPERATOR
console.log(id === 100 ? 'TRUE' : 'FALSE');

// Can do single line condition with NO BRACES
if(id === 100)
  console.log('TRUE - id === '+id);
else
  console.log('id does not === 100');

///////////////////////////////////////////////////
// Lecture 16
console.log('\n ---- Lecture 16 - Switches ----\n');


  



















//                FOR FUN
//////////////////////////////////////////////////////
// Fibonacci Fun
console.log('\n\n\n\n');

console.time('fib');
let fibString = '';
for(var i = 1; i < 10; i++){
  fibString += fib(i) + ' ';
}

function fib(n){
  if (n<2) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}

const test = document.getElementById('test');
test.innerHTML = fibString;
console.timeEnd('fib');