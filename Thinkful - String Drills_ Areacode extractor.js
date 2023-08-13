/*
DESCRIPTION:
You've got a bunch of textual data with embedded phone numbers. Write a function area_code() that finds and returns just the area code portion of the phone number.

>>> message = "The supplier's phone number is (555) 867-5309"
>>> area_code(message)
'555'
The returned area code should be a string, not a number. Every phone number is formatted like in the example, and the only non-alphanumeric characters in the string are apostrophes ' or the punctuation used in the phone number.

STRINGSREGULAR EXPRESSIONSFUNDAMENTALS
*/

function areaCode(text) {
  let str = '';
  for(let i = 0; i < text.length; i++){
    if(text[i] == '('){
      str += text[i+1];
      str += text[i+2];
      str += text[i+3];
      break;
    }
  }
  return str;

/*
function areaCode(text) {
  return text.match(/\((\d{3})\)/)[1];
}

  function areaCode(text) {
  return text.slice(text.indexOf('(') + 1, text.indexOf(')'));
}
}
*/
