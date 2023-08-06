var sortPeople = function (names, heights) {
  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights.length; j++) {
      if (heights[i] > heights[j]) {
        let temp = heights[i];
        heights[i] = heights[j];
        heights[j] = temp;
        let tempName = names[i];
        names[i] = names[j];
        names[j] = tempName;
      }
    }
  }
  return names;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
