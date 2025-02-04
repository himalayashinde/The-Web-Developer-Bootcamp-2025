// Conditionals
// Maths Validation

if(1+1 == 2){
    console.log("math works")
}

// Age Verification 
let age =10
if(age >= 18){
    console.log("You are an adult!")
}else{
    console.log("You are not an adult!")    
}


// Random Number
let random = Math.floor(Math.random()*10) + 1
console.log(random)
if(random == 5){
    console.log(`Your number is equal to ${random} You win!`)
}else{
    console.log("You lose! as your number is not equal to 5 i.e Number is = "+ `${random}`)
}   

// else if example

let day = "Sunday"
if(day === "Saturday"){
    console.log("It's a weekend")  
}
else if(day === "Sunday"){
    console.log("It's a weekend")  
}
else{
    console.log("Its a weekday")
}



