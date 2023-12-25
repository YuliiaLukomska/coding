const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

const bracketsType = {
  ')': '(',
  ']': '[',
  '}': '{',
};

function checkBrackets(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 1) {
    if (
      str[i] === '[' ||
      str[i] === ']' ||
      str[i] === '{' ||
      str[i] === '}' ||
      str[i] === '(' ||
      str[i] === ')'
    ) {
      arr.push(str[i]);
    }
  }
  const finalArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (isBracketClosed(arr[i])) {
      if (bracketsType[arr[i]] !== finalArray.pop()) {
        return false;
      } else {
        finalArray.splice(-1, 0);
      }
    } else {
      finalArray.push(arr[i]);
      console.log(finalArray);
    }
  }
  return finalArray.length === 0;
}

function isBracketClosed(brack) {
  return [')', ']', '}'].indexOf(brack) > -1;
}

const result = checkBrackets(someFn);
console.log(result);
