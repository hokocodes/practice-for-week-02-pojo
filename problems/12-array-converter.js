/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  let obj = {};
  
  let count = 0;
  
  array.forEach(function b(v) {
    if (obj[v] === undefined) {
      array.forEach(function second(c) {
        let valCount = 0;
        array.forEach(function oc(a) {
          
          if (a == array[count]) {
            valCount++;
            obj[a] = valCount;
            
          }
          
        });
        valCount = 0;
        count++;
      });
      
      
    }
  });
  
    

  

  return obj;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;