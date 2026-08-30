// CommonJS User Module
function getUserName() {
    console.log("Name: Soham");
}
function getUserRole() {
    console.log("Role: MERN Developer");
}
module.exports = {
    getUserName,
    getUserRole
}

// CommonJS User Module Import/Call
const app = require("./user");
app.getUserName();
app.getUserRole();

// ES Module – Calculator Functions
export function add() {
    console.log("add");
}
export function subtract() {
    console.log("subtract");
}
export function multiply() {
    console.log("multiply");
}

// ES Module – Calculator Import/Call
import { add } from "./calculator.js";
import { subtract } from "./calculator.js";
import { multiply } from "./calculator.js";
add();
subtract();
multiply();

// ES Module – User Functions
export function getUserName() {
    console.log("Name: Soham");
}
export function getUserRole() {
    console.log("Role: MERN Developer");
}

// ES Module – User Import/Call
import { getUserName } from "./user.js";
import { getUserRole } from "./user.js";
import { dir, log } from "console";
import { emitWarning } from "process";
import { emit } from "cluster";
import { buffer } from "stream/consumers"
import Stream from "stream"
import { rejects } from "assert"
import { promiseHooks } from "v8"
import { promises, resolve } from "dns"
getUserName();
getUserRole();
