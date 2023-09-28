/*
DESCRIPTION:
Write function which will create a string from a list of strings, separated by space.

Example:

["hello", "world"] -> "hello world"
*/

function wordsToSentence(words) {
  return words.join` `;
}

/*
const wordsToSentence = words => words.join(' ');

function wordsToSentence(words) {
  let x = "";
  for(let i = 0; i < words.length; i++){
    x = x + words[i] + " ";
  }
  return x.trim();
}
*/
