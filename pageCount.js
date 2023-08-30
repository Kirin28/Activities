function pageCount(n, p) {
const countFront = Math.floor(p/2);
const countBack = Math.floor((n/2) - (p/2));
return Math.min(countFront, countBack);
}

//didn't pass all tests
/* function pageCount(n, p) {
let count = 0;
let count2 = 0;

for (let i = 1; i <= n; i+=2) {
    if (i === p || i - 1 === p) 
        {break;}
        count++;
}
    for (let j = n; j >= 0; j-=2) {
        if (j === p || j + 1 === p)
       {break;}
       count2++;
   }
   
if (n % 2 === 1 && (p === n || p === n - 1)) {
    count2 = 0;
}
return Math.min(count, count2);
}
 */

/* pageCount has the following parameter(s):

int n: the number of pages in the book
int p: the page number to turn to
Returns

int: the minimum number of pages to turn */

console.log(pageCount(6, 2)) //1
console.log(pageCount(5, 4)) //0
console.log(pageCount(7, 4)) //1