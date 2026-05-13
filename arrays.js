let values=[1,2,3,"Samsung","Lenovo",false]
console.log(values)

console.log(values[4])
values[5]=true
console.log(values)

//length
console.log(values.length)

//at()
console.log(values.at(5))
console.log(values.at(-2))

//.at method only allows you to use the negative values

values.push("hp",8,9,"rey")
console.log(values)
//adding items with push at the end of the array

values.unshift("Mango","Peach",100)
console.log(values)
//addiing items with unshift at the beginning of the array

values.pop()
console.log(values)
//removing last value with pop

values.shift()
console.log(values)
//removing first value

//includes()
console.log(values.includes("Samsung"))
console.log(values.includes(4))

//spread operator
let num1 = [10,20,30]
let num2 = [40,50,60]
let num3 = [...num1,...num2]
console.log(num3)

//sort
let numbers = [10,2,33,67,90]
console.log(numbers.sort())


//concat
let arr1=[1,3,5]
let arr2=[34,78,90]
let arr3=[arr1.concat(arr2)]
console.log(arr3)

//splice 
// Create an Array
let fruits = ["Banana", "Orange", "Apple", "Mango"]
// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi")