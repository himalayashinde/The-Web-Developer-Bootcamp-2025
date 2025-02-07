// Making an array:
const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
colors[0]; // "red"

// They have a length:
//colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

//concat(arr) - returns a NEW array with the values of arr combined with the original array
//includes(val) - returns a boolean if the value is in the array
//indexOf(val) - returns the first index of a value in an array, -1 if not found
//join(char) - returns a string of all elements joined by the parameter
//reverse() - reverses the array
//slice(startIdx, endIdx) - returns a new array from startIdx to endIdx

Array.isArray(colors); // true
colors.push("green"); // ["red", "orange", "yellow", "green"]