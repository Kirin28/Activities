function staircase(n) {
    let string = "";
    for (let i = 1; i <= n; i++) { //outer i loop, looping from 1 to n
        for (let j = 0; j < n - i; j++) { //inner j loop, adds spaces to the left of each row by calculating n - i (i increases, number of spaces decreases)
            string += " "; 
        }
        for (let k = 0; k < i; k++) { //inner k loop, adds stars, k goes from 0 to < i == 1; k == 1, i == 2 (prints 2 stars)
            string += "#";
        }
        string += "\n" //new line character to move to the next row
    }
    console.log(string);
}
/* This is a staircase of size n = 4:
   #
  ##
 ###
#### */
console.log(staircase(4));
//I don't like this challenge :(