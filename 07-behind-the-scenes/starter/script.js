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

console.log(varX);
// console.log(letX);
// console.log(constX);

var varX = 1;
let letX = 2;
const constX = 3;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
