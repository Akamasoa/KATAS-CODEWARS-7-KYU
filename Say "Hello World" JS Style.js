/*
DESCRIPTION:
Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"
*/

var say = function(str1) {
  return function(str2) {
    return `${str1} ${str2}`;
  };
};
