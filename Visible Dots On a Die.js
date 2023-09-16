/*
DESCRIPTION:
Your task is to return the number of visible dots on a die after it has been rolled(that means the total count of dots that would not be touching the table when rolled)

6, 8, 10, 12, 20 sided dice are the possible inputs for "numOfSides"

topNum is equal to the number that is on top, or the number that was rolled.

for this exercise, all opposite faces add up to be 1 more than the total amount of sides Example: 6 sided die would have 6 opposite 1, 4 opposite 3, and so on. for this exercise, the 10 sided die starts at 1 and ends on 10.

Note: topNum will never be greater than numOfSides
*/

function totalAmountVisible(topNum, numOfSides){
    return (numOfSides * (numOfSides + 1)) / 2 + (topNum - numOfSides - 1);
}

/*
function totalAmountVisible(t, n){
  var sum=0;
  for (var i=1; i<=n; ++i)
    sum+=i;
  return sum-(n-t+1);
}
*/
