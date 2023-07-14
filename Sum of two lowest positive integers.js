/*
DESCRIPTION:
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
  let min = numbers[0], iMin = 0;
  for(let i = 1; i < numbers.length; i++)
    if(numbers[i] < min) {
      min = numbers[i];
      iMin = i;
    }
  
  let i = iMin == 0 ? 1 : 0;
  let min2 = numbers[i];
  for(i++; i < numbers.length; i++){
    if(i == iMin)
      continue;
    if(numbers[i] < min2)
      min2 = numbers[i];
  }
  
  return min + min2;
};

/*
function sumTwoSmallestNumbers(numbers) {
  let a = numbers.sort((a, b) => a - b);
  return a[0] + a[1];
}
*/
