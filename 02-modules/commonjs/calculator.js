// ES Module – greet() Export
export function greet() {
    console.log("Hello Node.js");
}

// ES Module – greet() Import
import { greet } from "./message.js";
greet();