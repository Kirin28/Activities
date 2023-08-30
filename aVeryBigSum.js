//for loop
/* function aVeryBigSum(ar) {
    // Write your code here
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
} */
//forEach
function aVeryBigSum(ar) {
    let sum = 0;
    ar.forEach(val => {sum += val});
    return sum; 
}
//why can't assign and return 'result' -> because forEach return value is undefined. forEach will update the sum and then I can return the updated sum

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])) //5000000015