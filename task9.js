// Write a program called stars. It should prompt the user for a number, 
// and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....

let number=Number(prompt("Enter a random number: "))

for(let i=1; i<=number;i++){
    let rows = ""
for (let j=1 ; j<=i; j++){
    rows +="*"
}
console.log(rows)
}

