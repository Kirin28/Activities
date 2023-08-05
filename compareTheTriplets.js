function compareTriplets(a, b) {
const arr = [];
let sumA = 0;
let sumB = 0; //not const but let cuz I am incrementing (changing) them inside the loop
for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) { //don't need another loop for b, can compare with b[i]
            sumA++;
        } 
        if (a[i] < b[i]) {
            sumB++;
        } 
}
    arr.push(sumA); //push the sums outside of the loop, then it will push the updated values of sum. Otherwise it pushes each time the value increments
    arr.push(sumB);
    return arr
}
console.log(compareTriplets([17, 28, 30], [99, 16, 8])) //[2 ,1]

