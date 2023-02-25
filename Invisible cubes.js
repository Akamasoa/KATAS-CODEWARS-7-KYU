/*
DESCRIPTION:
Imagine there's a big cube consisting of 
�
3
n 
3
  small cubes. Calculate, how many small cubes are not visible from outside.

For example, if we have a cube which has 4 cubes in a row, then the function should return 8, because there are 8 cubes inside our cube (2 cubes in each dimension)

For a visual representation: --> https://imgur.com/a/AN8A5DJ
*/

function notVisibleCubes(n) {
  return Math.max(0, (n - 2) ** 3);
}

/*
function notVisibleCubes(n) {
  if (n == 0)
    {return 0;}
  else if (n == 1)
    {return 0;}
  else
    {return (n - 2) ** 3;}
}
*/
