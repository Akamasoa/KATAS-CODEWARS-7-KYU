/*
DESCRIPTION:
I will give you two strings. I want you to transform stringOne into stringTwo one letter at a time.

Example:

stringOne = 'bubble gum';
stringTwo = 'turtle ham';

Result:
bubble gum
tubble gum
turble gum
turtle gum
turtle hum
turtle ham
*/

function mutateMyStrings(stringOne, stringTwo){
  let arr1 = stringOne.split('');
  let arr2 = stringTwo.split('');
  let answerString = [arr1.join('')];
  
  for(let i = 0; i < arr1.length; i++) {
   if(arr1[i] !== arr2[i]) {
      arr1[i] = arr2[i];
      answerString.push(arr1.join(''));
    }
  }
  return answerString.join('\n') + '\n';
}
