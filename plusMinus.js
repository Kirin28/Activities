function plusMinus(arr) {
   const n = arr.length;
   let positive = 0;
   let negative = 0;
   let zero = 0;
   for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positive++;
    } else if (arr[i] === 0) {
        zero++;
    } else if (arr[i] < 0) {
        negative++;
    }
   }
   const num1 = Number.parseFloat(positive/n).toFixed(6);
   const num2 = Number.parseFloat(negative/n).toFixed(6);
   const num3 = Number.parseFloat(zero/n).toFixed(6);
   console.log(num1);
   console.log(num2);
   console.log(num3);
}
//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

console.log(plusMinus([1, 1, 0, -1, -1]));
//this function does not have a return value
