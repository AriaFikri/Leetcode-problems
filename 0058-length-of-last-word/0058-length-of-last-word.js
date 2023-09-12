/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') sum++
    else if (s[i] === ' ' && sum > 0) {
        return sum
    }
  }
  return sum
};