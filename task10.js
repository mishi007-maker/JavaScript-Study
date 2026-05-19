// Write a program that calculates the total stock in a company from the array/list below
// if we know that the stock is the last digit in every array/list.


let prods = [['omo','30kshs','300'], ['milk','50kshs','200'], ['bread','45kshs','359'], ['coffee','5kshs','79']];

let total = 0;
for (let p of prods) total += Number(p[p.length-1])

console.log(total)
