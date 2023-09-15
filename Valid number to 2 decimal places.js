/*
DESCRIPTION:
Check that a number is a valid number that has been given to 2 decimal places. The number passed to the function will be given as a string. If the number satisfies the criteria below, the function should return true, else it should return false.

Please check the criteria for a valid number:

optional + or - symbol in front

optional digits before a decimal point (digits are characters ranging from '0' to '9')

a decimal point

exactly two digits after the point

nothing else

Examples of valid and non-valid numbers

List of valid numbers: [ "0.00" "3.90" "1000.00" ".00" "-2.55" "+2.10" "-.55"]

List of non-valid numbers: ["hellow 11.99" "11.9" "11" "11." ".9"]
*/

function validNumber(num) {
  return /^[+-]?\d*\.\d\d$/.test(num);
}

/*
function validNumber(num){
  let arr = num.split('.');
  if (arr.length!=2 || arr[1].length!=2)
    return false;
  for (let i=0; i<arr[0].length; ++i)
  {
    if (i==0)
    {
      if (arr[0][i]!='+' && arr[0][i]!='-'  && (arr[0][i]<'0' || arr[0][i]>'9'))
        return false;
    }
    else
      if (arr[0][i]<'0' || arr[0][i]>'9')
        return false;
  }
  for (let i=0; i<arr[1].length; ++i)
    if (arr[1][i]<'0' || arr[1][i]>'9')
      return false;
  return true;
}

function validNumber(num){
  if( num - '1234' ){
    let [start, end] = num.split('.')
    if( end - '1234' && end.length === 2 ){
      return true
    }
  }
  return false
}
*/
