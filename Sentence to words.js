/*
DESCRIPTION:
Write function splitSentence which will create a list of strings from a string.

Example:

"hello world" -> ["hello", "world"]
*/

function splitSentence(s) {
  return s.split(' ');
}

/*
function splitSentence(s) {
  var array = [];
  var string = '';
  for(i in s) {
    if(s[i] == ' ') {
      array.push(string);
      string = '';
    }
    else {
      string = string.concat(s[i]);
    }
  }
  array.push(string);
  return array;
}
*/
