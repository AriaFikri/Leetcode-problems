/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let stringify = x.toString();
  let intReverse =[];

  for (let i = stringify.length - 1; i >= 0; i--) {
    intReverse.push(stringify[i])
  }
  
  intReverse = intReverse.join("")
  return x == intReverse ? true : false
};