'use strict';

// console.log('=== BEHIND THE SCENES: SCOPING & HOSITING ===');

// function alpha() {
//   console.log('alpha: start');
//   beta();
//   console.log('alpha: end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// const outer = 'global';

// function demoScope() {
//   const inner = 'function';
//   if (true) {
//     const blockConst = 'block';
//     var functionVar = 'var-function-scoped';
//     console.log(outer, inner, blockConst, functionVar);
//   }
//   console.log(outer, inner, functionVar);
// }

// demoScope();

//console.log(varX);
// console.log(letX);
// console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello I am ${this.name}`);
//   },
// };

// person.greet();

// const anotherPerson = {
//   name: 'Sarah',
// };

// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// // DETACHED FUNCTION
// const greetFunction = person.greet;
// greetFunction();

// const obj = {
//   name: 'Object',
//   regularMethod: function () {
//     console.log('Regular:', this.name);
//   },

//   arrowMethod: () => {
//     console.log('Arrow: ', this.name);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const timer = {
//   // USING THE OLD WAY
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // USING ARROW FUNCTION
//   startModern: function () {
//     console.log(`${this.name} starting modern`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`);
//     });
//   },
// };

// timer.start();
// timer.startModern();

// const functionTypes = {
//   regularFunction: function () {
//     console.log('Arguments length', arguments.length);
//     console.log('First argument: ', arguments[0]);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log('Arrow function called');
//   },

//   modernFunction: (...args) => {
//     console.log('Args length: ', args.length);
//     console.log('First arg', args[0]);
//   },
// };

// functionTypes.regularFunction('Hello', 'World');
// //functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// PRIMITIVE
// let age = 30;

// //WE COPY THE PRIMITIVE, MAKING INDEPENDENT COPY
// let oldAge = age;

// age = 31;

// console.log('age', age);
// console.log('oldAge: ', oldAge);

// // OBJECT HEAP
// // OBJECT ARE STORED IN HEAP, VARIABLES HOLD REFERENCES
// const me = { name: 'Jonas', age: 30 };

// const friend = me;

// friend.age = 27;

// console.log('me', me);
// console.log('friend', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Sarah', age: 25 };

const updatedPerson = changeAge(originalPerson, 30);

console.log('Same object?: ', originalPerson === updatedPerson);

// SOLUTION TO MAKE A COPY
const original = {
  name: 'Alice',
  age: 28,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('Original name: ', original.name);
console.log('Shallow name: ', shallowCopy.name);

shallowCopy.hobbies.push('gaming');
console.log('Original hobbies: ', original.hobbies);
console.log('Shallow hobbies: ', shallowCopy.hobbies);

// DEEP COPY
const deepOriginal = {
  name: 'Charlie',
  age: 32,
  address: { city: 'Paris', country: 'France' },
  hobbies: ['travel', 'photography'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'London';
deepCopy.hobbies.push('cooking');
deepCopy.name = 'Lex';

console.log('Original Address', deepOriginal.address);
console.log('Copy Address: ', deepCopy.address);

console.log('Original Hobbies', deepOriginal.hobbies);
console.log('Copy Hobbies: ', deepCopy.hobbies);

console.log('Original name', deepOriginal.name);
console.log('Copy name: ', deepCopy.name);
