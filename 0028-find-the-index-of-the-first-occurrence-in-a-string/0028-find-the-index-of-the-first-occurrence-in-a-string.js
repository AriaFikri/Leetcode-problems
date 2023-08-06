/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let left = haystack.indexOf(needle[0]);
  let right = left + needle.length;
  let solution = haystack.slice(left, right);

  for (let i = left; i <= haystack.length; i++) {
    solution = haystack.slice(left, right);
    if (solution === needle) return left;
    right++;
    left++;
  }
  if (solution === needle) return left
  else return -1;
};