function beautifulDays(i, j, k) {
const arr = [];  
let num = 0;
for (let y = i; y <= j; y++) {
const reversedY = parseInt(y.toString().split('').reverse().join(''));
 num = (y - reversedY) / k;
 if (Number.isInteger(num)) {
    arr.push(num)
 }
}
 return arr.length;
}

console.log(beautifulDays(20, 23, 6)); //2

/* function reverseNum(n) {
    return parseInt(n.toString().split('').reverse().join(''));
}
*/

/* Function Description

Complete the beautifulDays function in the editor below.

beautifulDays has the following parameter(s):

int i: the starting day number
int j: the ending day number
int k: the divisor */