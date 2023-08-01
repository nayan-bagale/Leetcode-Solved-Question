var removeDuplicates = function (nums) {
  let array = [nums[0]],
    num = nums[0],
    k = 0;

  for (let i = 1; i < nums.length; i++) {
    if (num !== nums[i]) {
      num = nums[i];
      k += 1;
      array.push(nums[i]);
    }
  }
  console.log(k)
  return array;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates())