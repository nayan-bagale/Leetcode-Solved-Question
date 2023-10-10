function pivotSearch(arr, start, end) {
  while (start <= end) {
    let mid = start + (end - start) / 2;

    if (mid > start && arr[mid] > arr[mid + 1]) {
      return mid;
    }

    if (mid < end && arr[mid] < arr[mid - 1]) {
      return mid - 1;
    }

    if (arr[start] == arr[mid] && arr[mid] == arr[end]) {
      if (arr[start] > arr[start + 1]) {
        return start;
      }
      start++;
      if (arr[end] < arr[end - 1]) {
        return end - 1;
      }
      end--;
    } else if (
      arr[start] < arr[mid] ||
      (arr[start] == arr[mid] && arr[mid] > arr[end])
    ) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

var search = (nums, target) => {
  let start = 0,
    end = nums.length - 1,
    mid;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    return -1;
  }

  if (nums[mid] === target) return true;

  let LeftAns = splitingArray(nums, target, 0, mid);
  let RightAns = splitingArray(nums, target, mid + 1, last);

  if (LeftAns === -1 && RightAns === -1) {
    return false;
  } else {
    return true;
  }
};

console.log(search([2, 5, 6, 0, 0, 1, 2], 0)); // true
console.log(search([2, 5, 6, 0, 0, 1, 2], 3)); // false
console.log(search([2, 2, 2, 3, 2, 2, 2], 3)); // true

console.log(search([1, 0, 1, 1, 1], 0)); // true
console.log(
  search([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], 2)
); // true
