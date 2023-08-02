/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanNum = { 
      I: 1, 
      V: 5, 
      X: 10, 
      L: 50, 
      C: 100, 
      D: 500, 
      M: 1000 
    };

  let sumOf = 0;

  for (let i = 0; i < s.length; i++) {
    let currentNum = romanNum[s[i]];
    let nextNum = romanNum[s[i + 1]];
    let diff = nextNum - currentNum

    if (currentNum < nextNum) {
      sumOf += diff;
      i++;
    } else sumOf += currentNum;
  }
  return sumOf;
};