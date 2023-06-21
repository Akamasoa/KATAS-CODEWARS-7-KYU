/*
DESCRIPTION:
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1
*/

function solution(fullText, searchText){ 
  let array1 = (fullText.split(searchText));
  //console.log(array1);
    let result = 0;
    for (let i = 0; i < array1.length; i++) {
        result ++;
      //console.log(result);
    }
    return (result - 1)
}

/*
function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;
}
*/
