var removeDuplicates = function (nums) {
  let num = nums[0],
    k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (num !== nums[i]) {
        k += 1;
        num = nums[i];
        let temp = nums[k];
        nums[k] = nums[i];
        nums[i] = temp;

    }
    if(nums[0] > nums[i]) break
  }
  return k+1;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));