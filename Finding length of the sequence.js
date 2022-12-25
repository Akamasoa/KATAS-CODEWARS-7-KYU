let lengthOfSequence = function (arr, n) {
let count = 0;
let pos = arr.indexOf(n);

while (pos !== -1) {
  count++;
  pos = arr.indexOf(n, pos + 1);
}
 if (arr.indexOf(n)== -1) return 0;
 if (count === 1) return 0;
  if (count > 2) return 0;
  return arr.slice(arr.indexOf(n),arr.lastIndexOf(n)).length + 1;
};
