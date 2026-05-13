let x=Number(prompt("Enter a number"))

if (x % 2==0){
    console.log("Even number")
}else{
    console.log("Odd number")
}

//write a simple if statement to check eligibility of a voter.. assume a voter must be at least 18 years

let age=Number(prompt("Enter your age"))

if (age>=18 ){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible")
}

//find the largest number

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

//write a program that determines ticket prices based on age
//under 12 ->500/=, under 18->650/=, adults->800/=, over 60 yrs->400/=

let age1=Number(prompt("Enter you age"))

if(age1<=12){
    console.log("Ticket price is 500/=")
}else if (age1<18){
    console.log("Ticket price is 650/=")
}else if(age1>=18 && age1<=60){
    console.log("Ticket price is 800/=")
}else{
    console.log("Ticket price is 400/=")
}

//write a program that checks whether the length of a username is atleast 8 characters 
//if length <8 ,output "Too short" otherwise "Correct format"

let username=prompt("Enter your username")

if (username.length<8){
    console.log("Too short")
}else{
    console.log("Correct format")
}

let y=Number(prompt("Enter value"))
let even = y%2==0 ? "even" : "odd" //an alternative of small/short if-statements.
console.log(even)

// using a ternary operator

let age2=Number(prompt("Enter your age"))

let voter= age2>=18 ? "Eligible" : "Not eligible"
console.log(voter)

//username

let username=prompt("Enter your username")

let user=username.length<8 ? "Too short" : "Correct format"
console.log(user)

//slide 69
//