 function miniMaxSum(arr) {
let result = [];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (i !== j) {
            sum +=arr[j];
        }
    }
    result.push(sum);
    sum = 0;
}
const min = Math.min(...result);
const max = Math.max(...result);
console.log(min, max);
} 

console.log(miniMaxSum([1, 2, 3, 4, 5])); // 10 14

