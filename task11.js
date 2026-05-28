// Write a program that takes the date of birth of a person and 
// the program outputs the age in terms of years,months,days 

// Input from user
let birth_Day = Number(prompt("Enter birth day:"))
let birth_Month = Number(prompt("Enter birth month:"))
let birth_Year = Number(prompt("Enter birth year:"))

let current_Day = Number(prompt("Enter current day:"))
let current_Month = Number(prompt("Enter current month:"))
let current_Year = Number(prompt("Enter current year:"))

// Days in each month
let daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

// Checking for leap year
if ((current_Year % 4 == 0 && current_Year % 100 != 0) || (current_Year % 400 == 0)) {
    daysInMonth[1] = 29
}

// Calculating days
if (birth_Day > current_Day) {
    current_Day = current_Day + daysInMonth[current_Month - 2]
    current_Month-- //we reduce the array because it starts with 0 index
}
let days = current_Day - birth_Day

// Calculating months
if (birth_Month > current_Month) {
    current_Month = current_Month + 12
    current_Year--
}
let months = current_Month - birth_Month

// Calculating years
let years = current_Year - birth_Year
console.log("Age = " +years+ " years " + months + " months " + days +" days")

