// CommonJS Module – greet() Export
function greet() {
    console.log("Hello Node.js");
}
module.exports = {
    greet
};

// CommonJS Module – require()
const app = require("./message");
app.greet();

// ES Module – greet() Export
export function greet() {
    console.log("Hello Node.js");
}

// ES Module – greet() Import
import { greet } from "./message.js";
greet();