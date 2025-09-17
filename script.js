// Part 1: Variables & Conditionals
// =======================
let userName = "John";
let userAge = 20;

if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// =======================
// Part 2: Custom Functions
// =======================

// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "!";
}
console.log(greetUser(userName));

// Function 2: Calculate square of a number
function square(num) {
  return num * num;
}
console.log("Square of 4 is: " + square(4));

// =======================
// Part 3: Loops
// =======================

// For loop: print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("For loop number: " + i);
}

// While loop: countdown from 5
let count = 5;
while (count > 0) {
  console.log("Countdown: " + count);
  count--;
}

// =======================
// Part 4: DOM Interactions
// =======================

// 1. Change text when button clicked
document.getElementById("change-text").addEventListener("click", function() {
  document.getElementById("message").textContent = "Text has been changed!";
});

// 2. Change background color of body
document.getElementById("change-color").addEventListener("click", function() {
  document.body.style.backgroundColor = "lightblue";
});

// 3. Add new item to the list
document.getElementById("add-item").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("item-list").appendChild(newItem);
});