/*
DESCRIPTION:
The Ones' Complement of a binary number is the number obtained by swapping all the 0s for 1s and all the 1s for 0s. For example:

onesComplement(1001) = 0110
onesComplement(1001) = 0110
For any given binary number,formatted as a string, return the Ones' Complement of that number.
*/

function onesComplement(n) {
  return n.replace(/[01]/gi, v => (v === "1" ? (v = "0") : (v = "1")));
}

/*
function onesComplement(n) {
  let result = '';
  for (let i of n){
    if(i == '1'){
      result += '0';
    }else{
      result += '1';
    }
  }
  return result;
}
*/
