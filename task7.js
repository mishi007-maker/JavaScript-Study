// Write that prompts the user to input student marks.
// The input should be between 0 and 100.
// Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40

let student_score=Number(prompt("Enter student marks"))


if (student_score>79 && student_score<=100){
    console.log("Grade A")
}
else if (student_score>=60 && student_score<=79){
    console.log("Grade B")
}
else if (student_score>=49 && student_score<=59){
    console.log("Grade C")
}
else if (student_score>=40 && student_score<=49){
    console.log("Grade D")
}
else{
    console.log("Grade E")
}


