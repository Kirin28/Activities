function breakingRecords(scores) {
let highestScore = [];
let lowestScore = [];
let result = [];
let maxScore = 0;
let minScore = scores[0];
for (let i = 1; i < scores.length; i++) {
    if (scores[i] > scores[0] && scores[i] > maxScore && !highestScore.includes(scores[i]) ) {
        highestScore.push(scores[i]);
        maxScore = scores[i];
    } 
    if (scores[i] < minScore && !lowestScore.includes(scores[i])) {
        lowestScore.push(scores[i]);
        minScore = scores[i];
    }
}
result.push(highestScore.length, lowestScore.length);
return result;
}

//console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); //2 4
//console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); //4 0
console.log(breakingRecords([17, 45, 41, 60, 17, 41, 76, 43, 51, 40, 89, 92, 34, 6, 64, 7, 37, 81, 32, 50])); //5 1