var removeElement = function (nums, val) {
    let k = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === val){
            for(let j = nums.length-1; i < j; j--){
                if(nums[i] !== nums[j]){
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    k++;
                    break
                }
            }
        }else{
            k++
        }
    }

    console.log(k)
    return nums
};

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
