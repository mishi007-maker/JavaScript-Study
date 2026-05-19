// Write a program that takes the email and password as input from a user and checks if they are equal to “admin@mail.com”
//  and password is “Admin@123” , if so then print  “Login is Successful” and if not print “Invalid username or password”. 
//  ONLY accept 3 tries after which it notifies you that you have been blocked.

let correct_email= "admin@mail.com"
let correct_password = "Admin@123"
let attempts = 3

let info
for (let i = 0; i < attempts; i++) {
let pass = prompt("Enter email")
let email=prompt("Enter password")
if (email && pass === null) break 
if (email === correct_email && pass=== correct_password ) {
respond = "Login is Successful"
 break
} else {
 let remaining_tries = attempts-i - 1
 if (remaining_tries === 0) {
respond = 'you have been blocked'
} else {
respond = `Invalid username or password, you have ${remaining_tries} attempts remaining` //$isused as an alternative for the f in python
console.log(respond) 
}
}
}
console.log(respond)