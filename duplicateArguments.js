function solution(){
    const array = Array.from(arguments); 
    let duplicates = array.filter((value, index) => {
        return array.indexOf(value) !== index; 
        
    });
    return duplicates.length > 0 ? true : false; 
   }
   //Array.from creates an array instance from iterable objects (or values)
   //indexOf returns the index of the first occurrence of an element in an array
   //the duplicate item is the item whose index is different from its indexOf value. e.g. [1, 2, 3, 2] = indexOf returns 1 = index of 1st 2. Duplicate is at index 3
   //return all elements that have an index different from their indexof value
   //check if duplicates array is empty or not. If it's not empty, then it contains duplicates return true


console.log(solution(1, 2, 3))  // false
console.log(solution(1, 2, 3, 2))      // true
console.log(solution('1', '2', '3', '2'))  // true

/* let chars = ['A', 'B', 'A', 'C', 'B'];

let dupChars = chars.filter((c, index) => {
    return chars.indexOf(c) !== index;
});

console.log(dupChars); */
//https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/

/* function solution(){
    //console.log(new Set(arguments).size)
    //console.log(arguments.length)
    return new Set(arguments).size != arguments.length
  } */