/*
DESCRIPTION:
You need to swap the head and the tail of the specified array:

the head (the first half) of array moves to the end, the tail (the second half) moves to the start. The middle element (if it exists) leaves on the same position.

Return new array.

For example:

   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
    \----/   \----/         
     head     tail 

   [ -1, 2 ]  => [ 2, -1 ] 
   [ 1, 2, -3, 4, 5, 6, -7, 8 ]   =>  [ 5, 6, -7, 8, 1, 2, -3, 4 ]  
*/

function swapHeadAndTail(arr) {
  const head = arr.slice(0, Math.round((arr.length - 1) / 2));
  const tail = arr.slice(Math.round(arr.length / 2), arr.length);
  const center = arr.slice(
    Math.round((arr.length - 1) / 2),
    Math.round(arr.length / 2)
  );
  return [].concat(tail, center, head);
}

/*
function swapHeadAndTail(arr) {
  let a1 = [],
      a2 = [],
      a3 = [];
  if (arr.length%2==0)
  {
    for (let i = 0; i < arr.length; ++i)
      if (i < arr.length / 2)
        a1.push(arr[i]);
      else
        a3.push(arr[i]);
  }
  else
  {
    for (let i = 0; i < arr.length; ++i)
      if (i< ( arr.length - 1) / 2)
        a1.push(arr[i]);
      else if (i == (arr.length - 1) / 2)
        a2.push(arr[i])
      else
        a3.push(arr[i]);
  }
  for (let i = 0; i < a2.length; ++i)
    a3.push(a2[i]);
  for (let i = 0; i < a1.length; ++i)
    a3.push(a1[i]);
  return a3;
}
*/
