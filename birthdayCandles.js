//for loop:
/* function birthdayCakeCandles(candles) {
    let result = [];
    let tallestCandle = Math.max(...candles);
    for (let i = 0; i < candles.length; i++) {
            if (candles[i] >= tallestCandle) {
                result.push(candles[i]);
        }
    }
    return result.length; 
} */
//filter: 
function birthdayCakeCandles(candles) {
    let tallestCandle = Math.max(...candles);
    const max = candles.filter((i) => i === tallestCandle); //or >= ?
    return max.length;
}
console.log(birthdayCakeCandles([3, 2, 1, 3])) //2


/* 
let result = [];
const tallCandles = candles.reduce((a, b) => Math.max(a, b), -Infinity);
result.push(tallCandles);
return result;
*/