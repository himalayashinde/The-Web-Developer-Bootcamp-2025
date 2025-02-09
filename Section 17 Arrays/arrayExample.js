// COMPREHENSIVE JAVASCRIPT ARRAY EXAMPLES

// 1. Creating Arrays
const fruits = ["apple", "banana", "orange"];
const numbers = Array.from({length: 5}, (_, i) => i + 1); // [1,2,3,4,5]
const mixed = [1, "hello", true, null, {name: "object"}, [1,2]];

// 2. Basic Array Operations with Results
const colors = ["red", "orange", "yellow"];
console.log("Original array:", colors);

colors.push("green");     
console.log("After push:", colors);

colors.unshift("blue");   
console.log("After unshift:", colors);

const lastColor = colors.pop();            
console.log("Popped value:", lastColor);
console.log("After pop:", colors);

// 3. Useful Array Methods with Examples
const scores = [75, 82, 93, 88, 45, 95];

// Filtering scores above 80
const highScores = scores.filter(score => score > 80);
console.log("High scores:", highScores);

// Mapping to add bonus points
const bonusScores = scores.map(score => score + 5);
console.log("Scores with bonus:", bonusScores);

// Finding average score
const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average score:", averageScore);

// 4. Practical Array Operations
const students = [
    {name: "John", grade: 85},
    {name: "Jane", grade: 92},
    {name: "Bob", grade: 78},
    {name: "Alice", grade: 95}
];

// Finding top student
const topStudent = students.reduce((highest, current) => 
    current.grade > highest.grade ? current : highest
);
console.log("Top student:", topStudent.name);

// Sorting students by grade
const rankedStudents = [...students].sort((a, b) => b.grade - a.grade);
console.log("Ranked students:", rankedStudents);

// 5. Array Transformation Examples
const words = ["hello", "world", "javascript"];
const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
console.log("Capitalized words:", capitalizedWords);

// 6. Advanced Array Operations
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Flattening a matrix
const flatArray = matrix.flat();
console.log("Flattened matrix:", flatArray);

// Finding diagonal sum
const diagonalSum = matrix.reduce((sum, row, i) => sum + row[i], 0);
console.log("Diagonal sum:", diagonalSum);

// 7. Array Search and Validation
const inventory = ["book", "pen", "pencil", "eraser"];
console.log("Has pen?", inventory.includes("pen"));
console.log("Pen index:", inventory.indexOf("pen"));
console.log("Last pencil-like item:", inventory.findLast(item => item.includes("pencil")));
