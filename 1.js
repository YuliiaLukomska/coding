'use strict';

function foo({ a, b, c, ...props }) {
  console.log(props);
  console.log(a);
  console.log(b);
  console.log(c);
}

foo({ a: 1, b: 2, c: 3, d: 4, e: 5 });
