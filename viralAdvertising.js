function viralAdvertising(n) {
let shared = 5;
let liked = 0;
let cumulative = 0;

for (let i = 1; i <= n; i++) {
    liked = Math.floor(shared/2); 
    shared = liked * 3; 
    cumulative += liked;
}
return cumulative;

}

console.log(viralAdvertising(5)); //24

/* Function Description

viralAdvertising has the following parameter(s):

int n: the day number to report
Returns

int: the cumulative likes at that day */