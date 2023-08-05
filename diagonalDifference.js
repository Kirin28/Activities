/* function diagonalDifference(arr) {
let sumLeft = 0;
let sumRight = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    }
}
} */
function diagonalDifference(arr) {
    let sumLeft = 0;
    let sumRight = 0;
   sumLeft = arr[0][0] + 
    }


//need to convert matrix to arr.length because the index will always match
//[0][0]+[1][1]+[2][2]
//Return int: the absolute diagonal difference
const testArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(diagonalDifference(testArr)) //difference is: 2