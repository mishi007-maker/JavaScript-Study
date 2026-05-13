let person = {
    name:"Jane Doe",
    age:29,
    address:"123 Kimathi St",
    "is employed" : true
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person["is employed"])
console.log(person["address"])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

person.name="Alice"
console.log(person)



