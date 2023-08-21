function gradingStudents(grades) {
    let result = [];
    let finalGrade = 0;
    for (let i = 0; i < grades.length; i++) {
      let grade = grades[i];
      finalGrade = Math.ceil(grade / 5) * 5;
      if (grade >= 38 && finalGrade - grade < 3) {
          result.push(finalGrade);
      }
      else if (grade >= 38 && finalGrade - grade >= 3) {
          result.push(grade);
      } else {
        result.push(grade);
      }
    }
    return result;
  }

  //no need to have if (grade < 38)

console.log(gradingStudents([73, 67, 38, 33])); //75, 67, 40, 33

//get last decimal
//let decimalIndex = grade.toString().indexOf(".");
//let lastDecimal = grade.toString().substring(decimalIndex+1);

/* Every student receives a  in the inclusive range from  to 0 to 100.
Any grade less than 40 is a failing grade.


If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
 84 = round to 85 (85 - 84 is less than 3)
 29 = do not round (result is less than 40)
 57 = do not round (60 - 57 is 3 or higher)
*/