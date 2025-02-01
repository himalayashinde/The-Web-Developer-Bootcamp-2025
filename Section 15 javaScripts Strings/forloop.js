let animal="Duck"
undefined
for(let i=0;i<animal.lastIndexOf;i++){animal[i]}
undefined
for(let i=0;i<animal.lastIndexOf;i++){console.log(animal[i])}
undefined
for(let i=0;i<animal.length;i++){console.log(animal[i])}
// VM1022:1 D
// VM1022:1 u
// VM1022:1 c
// VM1022:1 k
undefined
for(let i in animal){console.log(i)}
// VM1123:1 0
// VM1123:1 1
// VM1123:1 2
// VM1123:1 3
undefined
for(let i in animal){console.log(animal[i])}
// VM1150:1 D
// VM1150:1 u
// VM1150:1 c
// VM1150:1 k
undefined
for(let i of animal){console.log(i)}
// VM1160:1 D
// VM1160:1 u
// VM1160:1 c
// VM1160:1 k
undefined
for(let i of animal){console.log(animal.join(" "))}
// VM1218:1 Uncaught TypeError: animal.join is not a function
//     at <anonymous>:1:41
// (anonymous) @ VM1218:1Understand this errorAI
for(let i of animal){console.log([...animal].join(" "))}
// 4VM1239:1 D u c k
undefined
for(let i of animal){console.log([...animal].join(""))}
// 4VM1253:1 Duck
undefined
for(let i in animal){console.log([...animal].join(""))}
// 4VM1262:1 Duck
undefined
for(let i of animal){console.log([...animal].join(""))}
// 4VM1271:1 Duck