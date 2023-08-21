//Challenge: Write a function that takes an array of integers as input and returns the maximum difference between any two elements in the array.
function maxDifference(arr) {
let diff = 0;
let newAr = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            diff = arr[i] - arr[j];
            newAr.push(diff);
        } else {
            diff = 0;
        }
    }
}
return newAr.reduce((a, b) => Math.max(a, b), -Infinity);
} 

console.log(maxDifference([4, 2, 9, 7, 5])); //7
console.log(maxDifference([1, 2, 3, 4, 5])); //4
