//for loop
/* function simpleArraySum(ar) {
    let num = 0;
    for (let i = 0; i < ar.length; i++) {
        num += ar[i]
    }
    return num
} */
//reduce()
const initialValue = 0;
const simpleArraySum = (arr) => arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])) //31

//reduce with letters
const initVal = "";
const arrayofLetters = (el) => el.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initVal
)
console.log(arrayofLetters(['h', 'o', 'l', 'a'])) //hola


const numbers = [175, 50, 25];
const subtract = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

console.log(subtract)