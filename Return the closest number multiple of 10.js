/*
DESCRIPTION:
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/

const closestMultiple10 = num => Math.round(num / 10) * 10;

/*
const closestMultiple10 = num => {
  let b = num % 10
  if (b < 5) {
    num -= b;
  } else {
    num += 10 - b;
  }
  return num;
};
*/
