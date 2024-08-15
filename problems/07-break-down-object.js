/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter 
and returns an array containing:  all the keys from the object **and** all the 
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/

function breakDownObj(obj) {
  // Get all keys from the object
  const keys = Object.keys(obj);
  // Get all values from the object
  const values = Object.values(obj);
  // Combine keys and values into a single array using spread syntax
  return [...keys, ...values];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;