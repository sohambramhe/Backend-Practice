// EventEmitter – Create Emitter
const EventEmitter = require('events');
const emitter = new EventEmitter();

// EventEmitter – Login Event
const login = require('events');
const emitter = new login();
emitter.on('login', () => {
    console.log("User Login Successful");
});

// EventEmitter – Server Event
const server = require('events');
const emitter = new server();
emitter.on('server', () => {
    console.log("Server Started");
});
emitter.emit("server");

// EventEmitter – Event with Parameter
const userLogin = require('events');
const emitter = new userLogin();
emitter.on('userLogin', (username) => {
});
emitter.emit("userLogin", "soham");

// EventEmitter – Multiple Listeners
const orderPlaced = require('events');
const emitter = new orderPlaced();
emitter.on("orderPlaced", () => {
    console.log("Order Confirmed");
});
emitter.on("orderPlaced", () => {
    console.log("Send Notification");
});
emitter.emit("orderPlaced");
