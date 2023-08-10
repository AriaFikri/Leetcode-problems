/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let string = x.toString();
  let result = [];

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === '-') {
      result.splice(0,0, string[i])
      break;
    }
    result.push(string[i]);
  }

  if (result.join('') < Math.pow(-2, 31) || result.join('') > Math.pow(2, 31) - 1) return 0;
  else return result.join('');
};