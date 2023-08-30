//filter and forEach (didn't pass tests with infinite array):
/* function bonAppetit(bill, k, b) {
let sum = 0;
bill.filter((i) => i !== bill[k]).forEach(val => {sum += val});
const split = Math.round(sum / 2);
return b === split ? "Bon Appetit" : b - split;
}
 */
//for loop (refactored from C#):
 function bonAppetit(bill, k, b) {
let sum = 0;
for (let i = 0; i < bill.length; i++)
        if(i !== k) {
            sum += bill[i];
        }
    sum /= 2;
    if (b <= sum)
        console.log("Bon Appetit");
    else
        console.log(Math.abs(sum - b));
} 

console.log(bonAppetit([3, 10, 2, 9], 1, 12)); //5

/* the bonAppetit function should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

bill: an array of integers representing the cost of each item ordered
k: an integer representing the zero-based index of the item Anna doesn't eat
b: the amount of money that Anna contributed to the bill */