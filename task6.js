// Write a program that lets the user input a password. Give them only 4 attempts to 
// check the passwords entered against “admin@123”. 
// If the password is correct access is granted. After you show them a message , the account is blocked.


let correct_password = "admin@123"
let attempts = 4

let info
for (let i = 0; i < attempts; i++) {
let pass = prompt("Enter password")
if (pass === null) break //nothing has been input
if (pass === correct_password) {
info = "Access granted"
 break
} else {
 let remaining_tries = attempts-i - 1
 if (remaining_tries === 0) {
info = 'Account blocked'
} else {
info = `Try again you have ${remaining_tries} attempts remaining` //$isused as an alternative for the f in python
console.log(info) 
}
}
}
console.log(info)