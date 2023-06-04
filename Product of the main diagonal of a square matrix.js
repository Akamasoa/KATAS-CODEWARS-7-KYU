/*
DESCRIPTION:
Given a list of rows of a square matrix, find the product of the main diagonal.

Examples:

mainDiagonalProduct([[1,0],[0,1]]) => 1

mainDiagonalProduct([[1,2,3],[4,5,6],[7,8,9]]) => 45
http://en.wikipedia.org/wiki/Main_diagonal
*/

function mainDiagonalProduct(mat) {
  return mat.reduce((accum, current, index) => accum * current[index], 1);
}

/*
function mainDiagonalProduct(mat) {
  return mat.reduce((accum, current, index) => accum * current[index], 1);
}
*/
