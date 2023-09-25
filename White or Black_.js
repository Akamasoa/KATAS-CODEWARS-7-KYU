/*
DESCRIPTION:
Complete the function that returns the color of the given square on a normal, 8x8 chess board:

chessboard

Examples
"a", 8  ==>  "white"
"b", 2  ==>  "black"
"f", 5  ==>  "white"
*/

function mineColor(file, rank) {
  const dict = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
   return dict[file] % 2 === rank % 2 ? "black" : "white";
}

