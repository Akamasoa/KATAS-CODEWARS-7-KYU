/*
DESCRIPTION:
Reverse and invert all integer values in a given list.

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Remove all types other than integer.
*/

function reverseInvert(array) {
  return array
    .filter(n => Number.isInteger(n))
    .map(n => -Math.sign(n) * parseInt(String(n).split("").reverse().join(""), 10))
}
