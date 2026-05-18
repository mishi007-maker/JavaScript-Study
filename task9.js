// Write a program called stars. It should prompt the user for a number, 
// and it should print the number of stars till the number entered.
// Example If rows is 5, it should print the following:
// *
// **
// ***
// ****
// *****.....

rows=Number(prompt("Enter number: "))

for( i=0; i< rows.length;i++){
    console.log("*" * i)
}

