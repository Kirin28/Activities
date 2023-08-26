function timeConversion(s) {
const meridiem = s.slice(-2);
const newTimeString = s.split(`${meridiem}`).join(` ${meridiem}`);
const newDate = new Date(`2023-01-01 ${newTimeString}`);
return newDate.toLocaleTimeString('en-GB');
}
console.log(timeConversion('12:40:22AM')); //00:40:22