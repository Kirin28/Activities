//for loop

/* function angryProfessor(k, a) {
let countEarly = 0;
for (let i = 0; i < a.length; i++) {
    let arrivalTime = a[i];
    if (arrivalTime <= 0) {
        countEarly++;
    }
}
    if (countEarly >= k) {
        return "NO";
    } else {
        return "YES";
    }
} */

//filter
  function angryProfessor(k, a) {
    const countEarly = a.filter((t) => t <= 0);
    return countEarly.length >= k ? "NO" : "YES";
} 

console.log(angryProfessor(3, [-2, -1, 0, 1, 2])); // "NO"

