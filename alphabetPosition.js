function alphabetPosition(text) {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let result = text.replace(/[^A-Za-z]/g, '').toLowerCase();
    let array = result.split("").map(x => letters.indexOf(x) + 1);
    return array.join(" ")
  }
console.log(alphabetPosition("The sunset sets at twelve o' clock.")) //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

