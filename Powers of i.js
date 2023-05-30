/*
DESCRIPTION:
�
i is the imaginary unit, it is defined by 
�
²
=
−
1
i²=−1, therefore it is a solution to 
�
²
+
1
=
0
x²+1=0.

Your Task
Complete the function pofi that returns 
�
i to the power of a given non-negative integer in its simplest form, as a string (answer may contain 
�
i).
*/

function pofi(n) {
  const remainder = n % 4;
  if (remainder === 0) {
    return "1";
  } else if (remainder === 1) {
    return "i";
  } else if (remainder === 2) {
    return "-1";
  } else {
    return "-i";
  }
}
