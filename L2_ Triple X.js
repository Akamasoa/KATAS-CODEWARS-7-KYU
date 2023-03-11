/*
DESCRIPTION:
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/

function tripleX(str) {
  return /^[^x]*xxx/.test(str);
}

/*
function tripleX(str){
  var arr = str.split("");
  var position = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "x") {
      position = i;
      break;
    }
  }
  return arr[i+1] === "x" && arr[i+2] === "x" ? true : false;
}
*/
