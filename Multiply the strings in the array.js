/*
DESCRIPTION:
You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
*/

function arrMultiply(arr){
   let num1 = parseInt(arr[0]);
   let num2 = parseInt(arr[1]);
   let result = num1 * num2;
   return result.toString();
}

/*
Short solution:
function arrMultiply(arr) {
  return (arr[0] * 1 * (arr[1] * 1)).toString();
}
*/
