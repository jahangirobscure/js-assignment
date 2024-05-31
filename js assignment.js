// 1. Create a variable called carName, assign the value Volvo to it.
let carName = "Volvo";
//console.log(carName)


// 2. On one single line, declare three variables with the following names and values:
let firstName = "John", lastName = "Doe", age = 35;
//console.log(firstName + " " + lastName + " " + age)


// 3. Use the correct assignment operator that will result in x being 50 (same as x = x * y)
x = 10;
y = 5;
x *= y; // x will be 50
//console.log(x)


// 4. Use comments to describe the correct data type of the following variables:
let length = 16; // data type: number
//console.log(typeof length); Output: "number"

let lastName = "Johnson"; // data type: string
//console.log(typeof lastName); Output: "string"

const x = {
  firstName: "John",
  lastName: "Doe"
}; // data type: object
//console.log(typeof const); Output: "object"


// 5. Execute the function named myFunction
function myFunction() {
    alert("Hello World!");
  }
  
  myFunction(); // Call the function
//POP Up: "Hello World!"


// 6. Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
let person = {
    name: "John",
    age: 50
  };
  
  alert(person.name + " is " + person.age); 
  // Output: "John is 50"


// 7. The <button> element should do something when someone clicks on it. Try to fix it!

/* HTML code
<button onclick="handleClick()">Click me.</button>

*/
// js code
<script>
function handleClick() {
  alert("You clicked the button!");
}
</script>


// 8. Array Related Question 
// 8.1. Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length); // Output is: 3

// 8.2. Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Ford"; // Output of the first item is "Ford"


// 9. Math Related Problems
// 9.1 Use the correct Math method to create a random number.
// used method: Math.random()
const randomNumber = Math.random();
console.log(randomNumber);


// 9.2 Use the correct Math method to return the largest number of 10 and 20.
// used method: Math.max()
console.log(Math.max(10, 20)); // Output: 20

// 9.3 Use the correct Math method to get the square root of 9.
// used method: Math.sqrt()
console.log(Math.sqrt(9)); // Output: 3


// 10. comparison operator related problems! 
/* 10.1 Choose the correct comparison operator to alert true, when x is greater than y. 
x = 10;
y = 5;

alert() // ? 
*/

x = 10;
y = 5;

if (x > y) {
  alert("True");
} else {
  alert("False");
}

// 10.2 Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".

age = 17;

// Use the ternary operator to check if age is less than 18
message = age < 18 ? "Too young" : "Old enough";
alert(message);

// Assignment End