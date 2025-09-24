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

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length', arguments.length);
    console.log('First argument: ', arguments[0]);
  },

  arrowFunction: () => {
    console.log(arguments);
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length: ', args.length);
    console.log('First arg', args[0]);
  },
};

functionTypes.regularFunction('Hello', 'World');
//functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');
