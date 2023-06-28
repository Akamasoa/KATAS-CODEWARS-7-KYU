/*
DESCRIPTION:
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
Task:
Write

smallest(n)
that will find the smallest positive number that is evenly divisible by all of the numbers from 1 to n (n <= 40).
E.g

smallest(5) == 60 // 1 to 5 can all divide evenly into 60
smallest(10) == 2520
*/

function smallest(n) {
  let res = n * (n - 1) || 1;
  for (let i = n - 1; i >= 1; i--) {
    if (res % i) {
      for (let j = n - 1; j >= 1; j--) {
        if (!(i % j) && !(res % j)) {
          res = i * res / j;
          break;
        }
      }
    }
  }
  return res;
}
