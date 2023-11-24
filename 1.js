'use strict';

function foo(callback) {
  callback(10);
}

function logger(value) {
  console.log(value);
}

// const result = logger(5);
// console.log(result);

foo(logger(5));
