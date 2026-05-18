// Write a program that takes as input the speed of a car e.g 80. 
// If the speed is less than 70, it should print “Ok”. Otherwise, 
// for every 5 km/s above the speed limit (70), it should give the driver one demerit point 
// and print the total number of demerit points.
// For example, if the speed is 80, it should print: “Points: 2”. 
// If the driver gets more than 12 points, the function should print: “License suspended”.

speed = Number(prompt("Enter car speed"))
limit = 70

if (speed <= limit){
console.log("Ok")}
else{
points = (speed - limit) / 5
if (points > 12){
console.log("License suspended")}
else{
console.log(`Point: ${points}`)
}
}