/*
DESCRIPTION:
Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

If the pizza is less than €5,- Michael invites Kate, so Michael pays the full price.
Otherwise Kate will contribute 1/3 of the price, but no more than €10 (she's broke :-) and Michael pays the rest.
How much is Michael going to pay? Calculate the amount with two decimals, if necessary.
*/

function michaelPays(costs) {
  let ans = 0;
  if (costs < 5) {
    ans = costs
  } else {
    let third = costs/3;
    third > 10 
      ? ans = costs - 10
      : ans = third * 2;
  }
  return Math.round(ans * 100) / 100;
}

/*
michaelPays = c => + Math.max(c < 5 ? c : 2 / 3 * c, c - 10).toFixed(2);
*/
