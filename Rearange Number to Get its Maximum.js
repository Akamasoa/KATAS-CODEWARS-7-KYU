/*
DESCRIPTION:
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. Assume that the argument is an integer.

Return -1 if the argument is not valid
Return null (nil for Ruby, nothing for Julia) if the argument is not valid.

maxRedigit(123); // returns 321
*/

var maxRedigit = function(num) {
  if (("" + num).length !== 3) return null;
  return (
    ("" + num)
      .split("")
      .sort((a, b) => b - a)
      .join("") * 1
  );
};
