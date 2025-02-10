// JAVASCRIPT ARRAY METHODS CHEATSHEET

// 1. Creating Arrays
const colors = ["red", "orange", "yellow"];
const numbers = Array.from({length: 5}, (_, i) => i + 1); // [1,2,3,4,5]

// 2. Basic Array Access
console.log(colors[0]);               // "red" - first element
console.log(colors[colors.length-1]); // "yellow" - last element
console.log(colors.length);           // 3 - array length

// 3. Adding Elements
colors.push("green");                 // Adds to end: ["red", "orange", "yellow", "green"]
colors.unshift("blue");               // Adds to start: ["blue", "red", "orange", "yellow", "green"]

// 4. Removing Elements
const lastColor = colors.pop();       // Removes & returns last element
const firstColor = colors.shift();    // Removes & returns first element

// 5. Combining Arrays
const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "mango"];
const allFruits = fruits1.concat(fruits2); // ["apple", "banana", "orange", "mango"]

// 6. Searching in Arrays
const fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("apple")); // true
console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("grape"));  // -1 (not found)

// 7. Array Transformation
const joinedFruits = fruits.join(", ");    // "apple, banana, orange"
const reversedFruits = fruits.reverse();    // ["orange", "banana", "apple"]

// 8. Slicing Arrays
const slicedArray = fruits.slice(1, 3);     // Returns elements from index 1 to 2
const copyArray = fruits.slice();            // Creates a shallow copy

// 9. Splicing Arrays
const months = ["Jan", "March", "April"];
months.splice(1, 0, "Feb");           // Inserts at index 1
months.splice(2, 1, "May");           // Replaces 1 element at index 2

// 10. Array Type Checking
console.log(Array.isArray(colors));    // true
console.log(Array.isArray("string"));  // false

// 11. Modern Array Methods
const numbers2 = [1, 2, 3, 4, 5];
const doubled = numbers2.map(n => n * 2);    // [2, 4, 6, 8, 10]
const evenNums = numbers2.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers2.reduce((a, b) => a + b, 0); // 15

// 12. Finding Elements
const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}];
const john = users.find(user => user.name === "John"); // {id: 1, name: "John"}

// 13. Array Spread Operator
const newArray = [...colors, "purple", "pink"];

// 14. Destructuring Arrays
const [first, second] = colors;       // first="red", second="orange"
const [head, ...rest] = colors;        // head="red", rest=["orange", "yellow"]

// 15. Iterating Arrays
colors.forEach(color => console.log(color));
for (const color of colors) {
    console.log(color);
}
for (const [index, color] of colors.entries()) {
    console.log(index, color);
}

// 16. Multidimensional Arrays
