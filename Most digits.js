/*
DESCRIPTION:
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}

/*
Long solution:

function findLongest(array){
  let num = '0';
  for(let i = 0; i < array.length; i++) {
    let string = array[i].toString();
    if(string.length > num.length) {
      num = string;
    }
  }
  return parseInt(num);
}
*/
