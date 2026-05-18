// Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd, display  either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?

number=Number(prompt("Enter number"))

if(number % 2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}

// If the number is a multiple of 4, print out “divisible by 4”.
number1=Number(prompt("Enter number"))


if(number % 4==0){
    console.log("Divisible")
}
else{
    console.log("Not divisible")
}