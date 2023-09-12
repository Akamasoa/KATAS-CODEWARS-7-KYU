/*
DESCRIPTION:
Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

The function should reject any arguments that are not integers, and sum the remaining integers.

sum(1, 2, 3)   // -> 6
sum(1, "2", 3) // -> 4
*/

function sum(...arr) {
  return arr
    .filter(element => {
      if (Number.isInteger(element)) return element;
    })
    .reduce((total, current) => total + current, 0);
}
