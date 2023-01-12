/*
Description:
Write function toInitials returs initials for a given person name. E.g: "Bill Gates" -> "B. G."

Note: initials should be separated with a space.
*/

function toInitials(name) {
  return name
    .split(" ")
    .map(v => v[0] + ".")
    .join(" ");
}

/*
function toInitials(name) {
  return name.replace(/([a-z])[a-z]+/gi, '$1.')
}

function toInitials(name) {
  let array = name.split(' ');
  let result = [];
  for (let x = 0; x < array.length; x++) {
    result.push(array[x][0].toUpperCase() + '.');
  }
  return result.join(' ');
}

*/

