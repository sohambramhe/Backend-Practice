// Writable Stream – Write Data to File
const fs = require("fs");
const stream = fs.createWriteStream("output.txt");
stream.write("Hello Node.js\n");
stream.end("I am learning Streams");