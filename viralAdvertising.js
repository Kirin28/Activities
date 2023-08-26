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

//shared value is changed based on the liked value:
//shared = 5/2 * 3 = 6
//shared = 6/2 * 3 = 9
//shared = 9/2 * 3 = 12 etc

console.log(viralAdvertising(5)); //24

/* Function Description

viralAdvertising has the following parameter(s):

int n: the day number to report
Returns

int: the cumulative likes at that day */