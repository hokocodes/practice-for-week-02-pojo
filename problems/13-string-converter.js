/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  let obj = {};
  let str = string.split('');
  let count = 0;
  
  str.forEach(function b(v) {
    if (obj[v] === undefined) {
      str.forEach(function second(c) {
        let valCount = 0;
        str.forEach(function oc(a) {
          
          if (a == str[count]) {
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
module.exports = stringConverter;