// 1. Server Started / Database Connected
console.log("Server Started");
setTimeout(() => {
    console.log("Database Connected");
}, 2000);
console.log("Server Ready");

// 2. Request / Database Processing
console.log("Request Received");
console.log("Database Processing");
setTimeout(() => {
    console.log("Database Response");
}, 3000);

// 3. Multiple Request Processing
console.log("Server Started");
console.log("Database Request Started");
console.log("Server can handle another request");
setTimeout(() => {
    console.log("Database Response Received");
}, 2000);

//4. Request Started / Another Request
console.log("Server Started");
console.log("Request Received");
console.log("Request Started");
console.log("Another Request Processed");
setTimeout(() => {
    console.log("Database Response");
}, 3000);

// 5. Multiple Requests A, B, C
console.log("Server Started")
console.log("Request A Started")
console.log("Request B Started")
console.log("Request C Started")
setTimeout(() => {
    console.log('Database Response');
}, 3000);

// 6. User Login Simulation
console.log("Login Request Received")
console.log("Checking User")
console.log("Server can handle another request")
setTimeout(() => {
    console.log("User Login Successful")
}, 2000);

// 7. Database Request Simulation
console.log("Server Started")
console.log("Database Request Started")
console.log("Another Request Processed")
console.log("Another Task Processed")
setTimeout(() => {
    console.log("Database Response Received")
}, 3000);

// 8. Node.js – Hello Node.js
console.log("Hello Node.js");
console.log("I am learning backend development");

// 9. Arithmetic Operations – Add, Subtract, Multiply, Divide
let num1 = 50;
let num2 = 10;
let Addition = num1 + num2;
console.log("Addition: ", Addition);
let Subtraction = num1 - num2;
console.log("Subtraction: ", Subtraction);
let Multiplication = num1 * num2;
console.log("Multiplication: ", Multiplication);
let Division = num1 / num2;
console.log("Division: ", Division);

// 10. Template Literal – Name, Goal, Technology
console.log(`Name: Soham`);
console.log("Goal: MERN Stack Developer");
console.log("Technology: Node.js");