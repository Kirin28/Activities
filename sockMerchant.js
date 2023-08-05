
function sockMerchant(n, ar) {
    const socks = {};
    let pair = 0;
    for (let i = 0; i < ar.length; i++) {
        let color = ar[i];
           if (socks[color]) {
            pair++;
            socks[color] = 0;
           } else {
            socks[color] = 1
           }
        }
    return pair
    }

const arrTest = [1, 2, 1, 2, 2, 1, 3, 2]
console.log(sockMerchant(7, arrTest)) //4

//forEach 
/* function sockMerchant(n, arr) {
 
    //loop through array of socks
    // separate colors - have a counter for each color
    //for each counter (each color):
    // divide by 2 and get the number of pairs of this color
    // add pairs to global pairs counter
    //return pairs
   
    let pairs = 0;
    let count = {};
    arr.forEach(item => {
        count[item] ? count[item]++ : count[item]=1
    })
    for(let key in count) {
        pairs+=Math.floor(count[key]/2);
    }
    return pairs;
  } */