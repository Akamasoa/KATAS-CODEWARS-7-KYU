/*
DESCRIPTION:
Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = function(text) {
  let obj = {};
  text.split("").map(v => (obj[v] = obj[v] ? obj[v] + 1 : 1));
  let arr = [];
  let val = Object.values(obj);
  let key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    arr.push([key[i], val[i]]);
  }
  return arr;
};
