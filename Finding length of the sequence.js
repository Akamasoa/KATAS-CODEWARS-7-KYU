/*
DESCRIPTION:
As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

For example, for a given array arr

[0, -3, 7, 4, 0, 3, 7, 9]
Finding length between two 7s like

lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
would return 5.

For sake of simplicity, there will only be numbers (positive or negative) in the supplied array.

If there are less or more than two occurrences of the number to search for, return 0, or in Haskell, Nothing.
*/

let lengthOfSequence = function (arr, n) {
let count = 0;
let pos = arr.indexOf(n);

while (pos !== -1) {
  count++;
  pos = arr.indexOf(n, pos + 1);
}
 if (arr.indexOf(n)== -1) return 0;
 if (count === 1) return 0;
  if (count > 2) return 0;
  return arr.slice(arr.indexOf(n),arr.lastIndexOf(n)).length + 1;
};
