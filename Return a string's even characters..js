/*
DESCRIPTION:
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

function evenChars(str) {
  if (str.length < 2 || str.length > 100) {
    return "invalid string";
  }
  let evenCharsArr = [];
  for (let i = 1; i < str.length; i += 2) {
    evenCharsArr.push(str[i]);
  }
  return evenCharsArr;
}
