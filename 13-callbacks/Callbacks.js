// Callback – Greet User
function greetUser(callback) {
    console.log("Hello User");
    callback();
}
greetUser(() => {
    console.log("Welcome to Node.js");
});

// Callback – Process Order
function processOrder(callback) {
    console.log("Order Received");
    callback();
}
processOrder(() => {
    console.log("Order Processed");
})

// Callback – Login User
function loginUser(callback) {
    console.log("Login Started");
    callback();
}
loginUser(() => {
    console.log("Login Successful");
})

// Callback – Check User
function checkUser(callback) {
    console.log("Checking User");
    callback();
}
checkUser(() => {
    console.log("User Verified");
});

// Callback – Place Order & Payment
function PlaceOrder(callback) {
    console.log("Order Received");
    callback();
};
PlaceOrder(() => {
    console.log("Payment Processing");
    console.log("Order Confirmed");
});