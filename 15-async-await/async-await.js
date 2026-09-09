// async/await – Get Message
async function getMessage() {
    const promise = await Promise.resolve("Hello Node.js");
    console.log(promise);
}
getMessage();

// async/await – Get User
async function getUser() {
    const user = await Promise.resolve("User Found");
    console.log(user);
}
getUser();

// async/await – User Login
async function loginUser() {
    const user = await Promise.resolve("Login Successful");
    console.log(user);
    console.log("Welcome User");
}
loginUser();

// async/await – Process Payment
async function processPayment() {
    const payment = await Promise.resolve("Payment Successful");
    console.log(payment);
    console.log("Order Confirmed");
}
processPayment();

// async/await – Place Order
async function placeOrder() {
    const recive = await Promise.resolve("Order Received");
    console.log(recive);
    const payment = await Promise.resolve("Payment Successful");
    console.log(payment);
    console.log("Order Confirmed");
}
placeOrder();