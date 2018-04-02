// Log to console
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
  while(i < 100){
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

