// Implement a program that takes 3 users  inputs from the terminal or the Browser, and stores them in three variables. 
// Return the largest of the three. Do this without using the the inbuilt max () function!

num1=Number(prompt("Enter num1"))
num2=Number(prompt("Enter num2"))
num3=Number(prompt("Enter num3"))

if(num1>num2 && num1>num3){
    console.log("Num1 is largest")
}
else if(num2>num1 && num2>num3){
    console.log("Num2 is largest")
}
else{
     console.log("Num3 is largest")
}