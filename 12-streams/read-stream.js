// Readable Stream – Read File Data
const fs = require("fs");
const text = fs.createReadStream("hello.txt");
text.on("data", (chunk) => {
    console.log(chunk.toString());
});

// Readable Stream – Detect End Event
const fs = require('fs');
const stream = fs.createReadStream('hell.txt');
stream.on('data', (chunk) => {
    console.log(chunk.toString());
});
stream.on('end', () => {
    console.log("File Reading Completed");
});