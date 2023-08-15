var searchRange = function (nums, target) {
    if(nums.length < 1) return [-1,-1]
    let l = 0;
    let r = nums.length - 1;
    let mid, arr = [-1,-1];
    while (r >= l) {
      mid = l + Math.floor((r - l) / 2);
      if (nums[mid] == target) {
      break
    }
      if (nums[mid] > target) r = mid - 1;
      else l = mid + 1;
    }
    for(let i=0; i<=mid+1; i++){
        if(nums[mid+i] === target) arr[1] = mid+i
        if(nums[mid-i] === target) arr[0] = mid-i
    }

    return arr
    
};


console.log(searchRange([5, 7, 7, 8, 8, 10],8));
console.log(searchRange([5, 7, 7, 8, 8, 10],6));
console.log(searchRange([],0));
console.log(searchRange([1], 1));
console.log(searchRange([2, 2], 2));