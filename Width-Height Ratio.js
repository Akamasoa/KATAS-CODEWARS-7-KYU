/*
DESCRIPTION:
We all use 16:9, 16:10, 4:3 etc. ratios every day. Main task is to determine image ratio by its width and height dimensions.

Function should take width and height of an image and return a ratio string (ex."16:9"). If any of width or height entry is 0 function should throw an exception (or return Nothing).
*/

// Function should take width and height of an image and return a ratio string (ex."16:9").
//If any of width or height entry is 0 function should raise an error.
function calculateRatio(w, h){
  if (w === 0 || h === 0) return "Error";
  let gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const n = gcd(w, h);
  return `${w / n}:${h / n}`;
}

/*
function calculateRatio(w, h) {
  if (!w || !h) throw new Error()
  let r = gcd(w, h);
  return (w / r) + ':' + (h / r)
}

function gcd(a, b) {
  if (b === 0) return a
  return gcd(b, a % b)
}
*/
