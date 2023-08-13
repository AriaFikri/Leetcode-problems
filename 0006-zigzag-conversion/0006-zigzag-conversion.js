/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
   let answer =[]
  for (let i = 0; i < numRows; i++) answer.push([]);
  let pointer = 0;
  let maxPointer = numRows - 1

  if (numRows === 1) return s

  for (let i = 0; i < s.length; i++) {
    if (pointer === maxPointer) {
      for (let j = pointer; j > 0; j--) {
        answer[pointer].push(s[i]);
        i++;
        pointer--;
      }
    }
    answer[pointer].push(s[i])
    pointer++
  }
  answer = answer.map((e) => e.join(''))
  return answer.join('')
};