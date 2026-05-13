// 8.Conditional Statement A student’s final grade is determined by their exam score (an number between 0 and 100) using the rules below:
//  If the score is 70 or above, the grade is A If the score is 60 to 69, the grade is B If the score is 50 to 59, the grade is C If the score is 40 to 49, the grade is D If the score is below 40, the grade is F
// //  Task: Write a JavaScript program that: Stores a student’s score in a variable. Uses if, else if, and else statements to determine the grade. Prints the grade to the console

let student_score=Number(prompt("Enter score"))


if (student_score>=70 && student_score<=100){
    console.log("Grade A")
}
else if (student_score>=60 && student_score<=69){
    console.log("Grade B")
}
else if (student_score>=50 && student_score<=59){
    console.log("Grade C")
}
else if (student_score>=40 && student_score<=49){
    console.log("Grade D")
}
else{
    console.log("Grade F")
}

// Create a variable and console log whether a number is odd or even
let num=20

if (num % 2==0){
    console.log("Even")
}else{
    console.log("Odd")
}

// Create 3 variables and console log the largest of them. Assume that the user would not enter any two numbers which are the same.
let num1=Number(prompt("Enter num1"))
let num2=Number(prompt("Enter num2"))
let num3=Number(prompt("Enter num3"))

if (num1>num2 && num1>num3){
    console.log("Num1 is the largest")
}else if(num2>num1 && num2>num3){
    console.log("Num2 is largest")
}else{
    console.log("Num3 is largest")
}
// Create a variable called year and enter the a random year. Check if the year is a leap year or not. A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.
let year = Number(prompt("Enter year"))

if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log("Leap Year")
} else {
    console.log("Not a Leap Year")
}

// Take as input from a user the temperature if the temperature is above 30°C display “The temperature is too high”,if the temperature   is above 15 display “Normal temperature” otherwise display “Cold temperature”
let temp=Number(prompt("Enter temperature"))

if(temp>30){
    console.log("The temperature is too high")
}
else if(temp>15 && temp<=30){
    console.log("Normal Temperature")
}
else{
    console.log("Cold Temperature")
}
// Write a js program that checks if a variable x is between 10 and 20 (inclusive) and if another variable y is greater than 100. If both conditions are true, display"Conditions met", otherwise display"Conditions not met"
let x=Number(prompt("Enter value1"))
let y=Number(prompt("Enter value2"))

let number=10>=x<=20 && y>100 ? "Conditions met" : "Conditions not met"
console.log(number)
// Write a js program that checks if a variable password is equal to the string "secret123". If it is, display "Access   granted", otherwise display"Access denied"
let password = prompt("Enter password")
const correct_password="Secret123"

if(password==correct_password){
    console.log("Access granted")
}else{
    console.log("Access Denied")
}

// Write a js program that checks if a variable student_score is greater than 90. If true, check if the attendance is greater than 80. If both conditions are true, display"Excellent student", otherwise display "Good score, but attendance needs improvement"

let student_score=Number(prompt("Enter student score"))
let attendance=Number(prompt("Enter attendance"))


if (student_score>90){
    if (attendance > 80){
        console.log("Good attendance,but needs improvement")
    }
}else{
    console.log("Needs improvement on both score and attendance")
}




