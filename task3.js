// Write a program which gets a phone number from a form input or terminal. 
// Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. 
// Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”

let phone=(prompt("Enter phone number"))

if (phone.startsWith("+254") && phone.length === 13) {
    console.log(phone) 
} else if (phone.startsWith("254") && phone.length === 12) { 
    console.log( "+" + phone) 
} else if (phone.startsWith("0") && phone.length === 10) { 
    console.log("+254" + phone.slice(1)) 
} else if ((phone.startsWith("7") || phone.startsWith("1")) && phone.length === 9) {
    console.log("+254" + phone)
} 
else {
    console.log("Invalid number")
}

