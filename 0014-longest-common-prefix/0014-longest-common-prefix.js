/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefixArr = [];
  let answerArr = [];
  let i = 0;

  const pushElement = (arr) =>
    arr.forEach((element) => prefixArr.push(element[i]));

  for (let j=0;j<strs[0].length;j++){
    pushElement(strs);
    if (prefixArr.every((element) => element === prefixArr[0])) {
      answerArr.push(strs[0][i])
      prefixArr = [];
      i++;
    }
  };
  return answerArr.join('')
};