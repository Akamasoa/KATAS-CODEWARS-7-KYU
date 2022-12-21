/*
Description:
Given two integer arrays where the second array is a shuffled duplicate of the first array with one element missing, find the missing element.

Please note, there may be duplicates in the arrays, so checking if a numerical value exists in one and not the other is not a valid solution.

find_missing([1, 2, 2, 3], [1, 2, 3]) => 2
find_missing([6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2]) => 8
The first array will always have at least one element.
*/

function findMissing(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) 
      return arr1[i];
    }
}

/*
Without sort:

function findMissing(arr1, arr2) {
  let count1 = 0;
  for(var i = 0; i < arr1.length; i++){
    count1 += arr1[i];
    }
  let count2 = 0;
  for(var i = 0; i < arr2.length; i++){
    count2 += arr2[i];
  }
  let x = count1 - count2;
  
	return x;
}
*/
