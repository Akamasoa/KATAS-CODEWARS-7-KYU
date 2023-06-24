/*
DESCRIPTION:
Write reverseList function that simply reverses lists.
*/

function reverseList(arr) {
  return arr.reverse();
}

 /*
 The long way:
 
 function reverseList(arr) {
  const reverseArray = [];
  for(let i = arr.length - 1; i >= 0; i--)
    reverseArray.push(arr[i]);
  return reverseArray;
}
*/
