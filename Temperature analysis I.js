/*
DESCRIPTION:
You were given a string of integer temperature values. Create a function lowest_temp(t) and return the lowest value or None/null/Nothing if the string is empty.
*/

function lowestTemp(t) {
  return t.length > 0 ? Math.min(...t.split(" ").map(Number)) : null;
}

/*
function lowestTemp(t) {
  let arr = [];
  let str = "";
  for (let i = 0; i < t.length; i++) {
    while (t[i] !== " " && i < t.length) {
      str += t[i];
      i++;
    }
    arr.push(+str);
    str = "";
  }
  return t.length > 0 ? Math.min(...arr) : null;
}
*/
