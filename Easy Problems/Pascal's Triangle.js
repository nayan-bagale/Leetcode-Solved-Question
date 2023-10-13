/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const triangle = [];
  for (let row = 0; row < numRows; row++) {
    let arr = [1];
    var i = 0;
    for (let col = 1; col <= row; col++) {
      if (col === row) {
        arr.push(1);
        break;
      }
      while (i < triangle.length) {
        let l = triangle[triangle.length - 1][i];
        let r = triangle[triangle.length - 1][i + 1];

        arr.push(l + r);
        i++;
        break;
      }
    }
    triangle.push(arr);
  }

  return triangle;
};

console.log(generate(5));
console.log(generate(1));
