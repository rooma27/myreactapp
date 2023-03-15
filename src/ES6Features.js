
// let and const keywords 
let i = 10;
console.log(i);   //Output 10

const PI = 3.14;
console.log(PI);  //Output 3.14

// Arrow Functions
let sumOfTwoNumbers = (a, b) => a + b;
console.log(sum(10, 20)); // Output 30

// Multi-line Strings
let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`

// Default Parameters 
//ES6
let calculateArea = function(height = 100, width = 50) {  
    // logic
}

//ES5
var calculateArea2 = function(height, width) {  
   height =  height || 50;
   width = width || 80;
   // logic
}

// Template Literals
let name = `My name is ${firstName} ${lastName}`

// Destructuring Assignment

//Array Destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

//Object Destructuring
let person = {name2: "Peter", age: 28};
let {name2, age} = person; // Object destructuring assignment
console.log(name2, age);

// Enhanced Object Literals
function getMobile(manufacturer, model, year) {
    return {
       manufacturer,
       model,
       year
    }
 }
 getMobile("Samsung", "Galaxy", "2020");
 
// Promises
var asyncCall =  new Promise((resolve, reject) => {
    // do something
    resolve();
 }).then(()=> {   
    console.log('DON!');
 })

//  Classes
class UserProfile {   
    constructor(firstName, lastName) { 
       this.firstName = firstName;
       this.lastName = lastName;     
    }  
     
    getName() {       
      console.log(`The Full-Name is ${this.firstName} ${this.lastName}`);    
    } 
 }
 let obj = new UserProfile('John', 'Smith');
 obj.getName(); // output: The Full-Name is John Smith

//  Modules
export var num = 50; 
export function getName(fullName) {   
   //data
};
import {num, getName} from 'module';
console.log(num); // 50
