/*
Description:
Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:
{
    January: {
        '1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
    },
    February: {
        '1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
    },
    ...
    December: {
        '1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
    }
}
Your function should return "Naughty!" or "Nice!" depending on the total number of occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/

function charConcat(string){
  let str = string.split('');
  
  let arr = [];
  for (let i = 1;i <= str.length / 2; i++){
  arr.push(str[i - 1]);
   arr.push(str[str.length - i])
      arr.push(i);
  }
  return arr.join('');
}
