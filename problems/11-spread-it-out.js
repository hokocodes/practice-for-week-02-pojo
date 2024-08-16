/***********************************************************************
Write a function named `spreadItOut(array1, array2)` that accepts two arrays and
uses *spread operator* syntax to return a single array. 



Examples:
spreadItOut([3,5,6], [1,2,3]); // => [3,5,6,1,2,3];
spreadItOut([], [1,2,3]); // => [1,2,3];
spreadItOut(["apple", "banana"], [1,2,3]); // => ["apple", "banana", 1, 2, 3];
***********************************************************************/

function spreadItOut(array1, array2) {
  
  let arr = [];
  array1.forEach(function add(num) {
    arr.push(num);
  });
  array2.forEach(function add(num) {
    arr.push(num);
  });
  return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = spreadItOut;