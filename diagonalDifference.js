function diagonalDifference(arr) {
const matrix = arr.length;
let sumLeft = 0;
let sumRight = 0;
let result = 0;
for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
        if (i === j) {
            sumLeft += arr[i][j];
        }
        if (i + j === matrix - 1) {
            sumRight += arr[i][j];
        }
    }
}
result = sumLeft - sumRight;
return Math.abs(result);
}
   /*  function diagonalDifference(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    let result = 0;
   sumLeft = arr[0][0] + arr[1][1] + arr[2][2];
   sumRight = arr[0][2] + arr[1][1] + arr[2][0];
    result = sumLeft - sumRight;
   return Math.abs(result);
    } */


//need to convert matrix to arr.length because the index will always match
//[0][0]+[1][1]+[2][2]
const testArr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]
console.log(diagonalDifference(testArr)) //difference is: 2