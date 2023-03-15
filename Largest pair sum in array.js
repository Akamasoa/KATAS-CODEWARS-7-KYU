/*
DESCRIPTION:
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.
*/

function largestPairSum(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, b) => a + b, 0);
}

/*
function largestPairSum (numbers) {  
  let num1 = -2000000;
  let pos = 0;
  for(let a = 0; a < numbers.length; a++){
    if(numbers[a] > num1){
      num1 = numbers[a];
      pos = a;
    };
  };
  let num2 = -2000000;
  for(let b = 0; b < numbers.length; b++){
    if(b != pos){
      if(numbers[b] > num2){
          num2 = numbers[b];
        };
    };
  };

  return num1 + num2;
};
*/
