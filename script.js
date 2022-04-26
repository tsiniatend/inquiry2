//VERY EASY: Write a function named min that takes two arguments and returns their minimum.

function calledMin(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return secondNumber;
    } else {
        return firstNumber;
    }
}
console.log(calledMin(1, 5));
// EASY: Create an array of students holding their last name, first name, and age with 3 students.To validate, please log a greeting with the first name, last name and age of the 2nd student.The output should look like "Hello, my name is John Doe and I'm 19 years old." A: array has certian elements and to access you have to use its #value O: object needs only the name that you assign it. 

const student = [
    studentOne, studentTwo, studentThree
];
studentOne = {
    firstName: "barak",
    lastName: "obama",
    age: 55
}
studentTwo = ["kesu", "endalkachew", 33];
studentThree = ["christian", "renaldo", 78]
console.log(`Hello, my name is ${student[0].firstName} and I'm 19 years old.`)
//console.log(`Hello, my name is ${student[studentThree[0]]} and I'm 19 years old.`)

//MEDIUM: Create a program that accepts a number(1 - 12) as input and logs to the console that number and its corresponding month.For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number(e.g.less than 1 or greater than 12).
let userInput = prompt("Please enter your birth month number");
if (userInput == 1) {
    console.log("January")
}
else if (userInput == 2) {
    console.log("Feb")
}
else if (userInput == 3) {
    console.log("March")
}
else if (userInput == 4) {
    console.log("April")
}
else if (userInput == 5) {
    console.log("May")
}
else if (userInput == 6) {
    console.log("June")
}
else if (userInput == 7) {
    console.log("July")
}
else if (userInput == 8) {
    console.log("August")
}
else if (userInput == 9) {
    console.log("September")
}
else if (userInput == 10) {
    console.log("October")
}
else if (userInput == 11) {
    console.log("November")
}
else if (userInput == 12) {
    console.log("December")
}
else {
    alert("Invalid.  Please enter a number between 1 and 12")
}
//HARD: Given the information below for Tom and Jerry.● Tom - height:  9in mass: 8 g

let tomHeight = 9;
let jerryHeight = 10;

let tomMass = 8;
let jerryMass = 45;

function calcBmi(height, mass) {
    return (mass / (height * height));

}
var boolInfo = Boolean(calcBmi(jerryHeight, jerryMass) < calcBmi(tomHeight, tomMass))

console.log(`${boolInfo}`)