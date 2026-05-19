// Write a program that takes input of 2 values and adds them. 
// The program should only accept numbers and floats only or otherwise display an error “invalid character entered” 
// and take the user to re-enter the inputs .

let num1, num2;


while (true) {
    num1 = prompt("Enter first number:");

    if (!isNaN(num1) && num1 !== "") {
        num1 = parseFloat(num1)
        break
    } else {
        alert("invalid character entered")
    }
}


while (true) {
    num2 = prompt("Enter second number:")

    if (!isNaN(num2) && num2 !== "") {
        num2 = parseFloat(num2)
        break;
    } else {
        alert("invalid character entered")
    }
}

let sum = num1 + num2

alert("Sum = " + sum)
console.log("Sum = " + sum)
