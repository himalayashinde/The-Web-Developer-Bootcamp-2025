hello.length
// VM80:1 Uncaught ReferenceError: hello is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM80:1Understand this errorAI
let hello="how are u?";
undefined
hello.le
undefined
hello.length
10
hello.length()
// VM176:1 Uncaught TypeError: hello.length is not a function
//     at <anonymous>:1:7
// (anonymous) @ VM176:1Understand this errorAI
hello.toUpperCase
// ƒ toUpperCase() { [native code] }
hello.toUpperCase()
'HOW ARE U?'
hello.toLocaleLowerCase()
'how are u?'
hello.trim
// ƒ trim() { [native code] }
hello.trim()
'how are u?'
let trim_space_before_after="        I have some space ahead and later        "
undefined
trim_space_before_after
'        I have some space ahead and later        '
trim_space_before_after.trim()
'I have some space ahead and later'

// Methods with args - indexOf
let str="I am learning JavaScript"
undefined
str.indexOf("am")   
2
str.indexOf("am", 3)    
5 // 3rd index onwards
str.indexOf("am", 6)    
-1 // not found

let tvShow = "DayLight"
undefined
tvShow.indexOf("Day");
0
tvShow.indexOf("Light");
3
tvShow.indexOf("light");
-1
tvShow.indexOf("Light", 3);
3
tvShow.indexOf("Light",2);
3
tvShow.indexOf("Light",1);
3
tvShow.indexOf("Light",4);
-1

// Using Backticks for String Template Literals and string interpolation

let qty = 50;
undefined
let price = 20;
undefined
let productname="Coke";
undefined
`Hello There you Bought ${productname} who's price is ${price} per bottle and quantity you ordered is ${qty} and total price is ${qty*price}`
"Hello There you Bought Coke who's price is 20 per bottle and quantity you ordered is 50 and total price is 1000"

// Math Object
Math.round(4.7)
5
Math.round(4.3)
4
Math.PI
3.141592653589793
Math.E
2.718281828459045
Math.cos(0)
1
Math.fl
undefined
//Math.floor(36.l1231)
//VM1532:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this errorAI
Math.floor(36.1231)
36
Math.ceil(36.1231)
37

//Math.floor(36.l1231)
//VM1532:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this errorAI
Math.floor(36.1231)
36
Math.ceil(36.1231)
37
Math.random()
0.2999228700112839
Math.random()
0.43654576445600424
Math.random()
0.29079001092747414
Math.random()
0.4289650062000028
Math.random()
0.23214234262591793
Math.random()
0.7392607834136851
Math.random(10,20)
0.766755134987394
Math.random()**10
0.000026045562221282505
Math.random()*10
3.0154559781375556
Math.random()*10
5.782629848348426
Math.random()*10
9.858403379830087
Math.random()*10
2.1926025314365827
Math.random()*10
8.820110734275241
Math.floor((Math.random()*10));
0
Math.floor((Math.random()*10));
9
Math.floor((Math.random()*10));
5
Math.floor((Math.random()*10));
7
Math.floor((Math.random()*10));
3
Math.floor((Math.random()*10));
8
Math.floor((Math.random()*10));
6

