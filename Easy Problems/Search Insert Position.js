var searchInsert = function (nums, target) {
    if(nums[nums.length -1] < target) return nums.length
    let start=0,
    end=nums.length-1,
    mid;

    while(start <= end){
        mid = start + Math.floor((end - start)/2)
        if(nums[mid] === target) return mid

        if(nums[mid] > target){
            end = mid - 1;
        }else{
            start = start + 1;
        }
    }

    return start
};

console.log(searchInsert([1, 3, 5, 6],5));//Output: 2
console.log(searchInsert([1, 3, 5, 6],2));//Output: 1
console.log(searchInsert([1, 3, 5, 6],7));//Output: 4