// Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.

let email=(prompt("Enter your email"))

if (email.includes("@") && email.includes(".") ){
    console.log("Valid email")
}
else{
    console.log("Invalid email")
}