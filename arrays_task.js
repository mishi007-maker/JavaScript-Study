// Assignment 1: Create an Array
// Create an array named colors with the following elements: 'red', 'green', 'blue'.
let colors=["red","green","blue"]
console.log(colors)
// Assignment 2: Access and Modify Array Elements
// Given the array colors, access the second element and change it to 'pink'. Then, display the modified array.
colors.splice(1,1,"Pink");
console.log(colors)
// Assignment 3: Determine the Length of an Array
// Given the array colors, determine its length and store it in a variable lengthOfColors. Then, display lengthOfColors.


let lengthOfColors = colors.length
console.log(lengthOfColors)

// Assignment 4: Use .pop() Method
// Given the array colors, use the .pop() method to remove the last element from the array. Then, display the modified array.
colors.pop()
console.log(colors)

// Assignment 5: Combine Arrays
// Given two arrays arr1 and arr2, combine them into a single array combinedArray using the .concat() method.
//  Then, remove the first element from combinedArray using the .shift() method. Finally, display the modified combinedArray.
const arr1 = [1, 2, 3]
const arr2 = ['a', 'b', 'c']
let combinedArray = arr1.concat(arr2)
console.log(combinedArray)

combinedArray.shift()             
console.log(combinedArray)            

// Assignment 6: Extract Subarray
// Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 to index 4 using the .slice() method. 
// Then, modify the extractedArray by replacing its elements with 'x', 'y', and 'z' using the .splice() method. 
// Finally, display both the sourceArray and the modified extractedArray.
const source_array=["a","b","c","d","Alex","Jamal","Hope"]
console.log(source_array)
 
extracted_array=source_array.slice(2,5)
console.log(extracted_array)

extracted_array.splice(2,3,"x","y","z")
console.log(extracted_array)
