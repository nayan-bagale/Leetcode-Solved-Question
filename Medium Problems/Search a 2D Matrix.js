var searchMatrix = function(matrix, target) {
    // for(let i=0; i<matrix.length; i++){
    //     for(let j=0; j<matrix[i].length; j++){
    //         if( target === matrix[i][j]){
    //             return true
    //         }
    //     }
    // }
    // return false;

    for (let i = 0; i < matrix.length; i++) {
      for (let j=0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          return true;
        }else if(matrix[i][matrix[i].length - 1 ] < target){
          break
        }

        
      }
    }
    return false;
};

console.log(
  searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  3)
);
console.log(
  searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],13)
);

console.log(searchMatrix([[1], [3]], 3));