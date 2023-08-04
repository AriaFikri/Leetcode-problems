/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  i = 0;

  do {
    if (nums[i] === nums[i + 1]) {
        nums.splice((i+1),1)
    } else i++;
  } while (i < nums.length)

  return nums.length;
};