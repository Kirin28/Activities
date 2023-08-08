function targetHeartRate(age, rhrs) {
let rate = 0;
const arr = [];
for (let i = 55; i <= 95; i += 5) {
let intensity = i / 100;
rate = (((220 - age) - rhrs) * intensity) + rhrs;

arr.push(Math.round(rate));
}
return arr;
}
console.log(targetHeartRate(22, 65));
//Karvonen Heart Rate formula (((220 - age) - restingHR) x intensity) + restingHR;
