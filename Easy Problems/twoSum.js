var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i)
    for (let j = 0; j < nums.length; j++) {
        console.log(j)
      let temp = nums[i] + nums[j];
      if (temp === target) {
        return ([i, j]);
      }
      console.log(temp)
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));