// HTTP Server – Stream File to Response
const http = require('http');
const fs = require("fs");
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        const text = fs.createReadStream("input.txt");
        text.pipe(res);
    }
});
server.listen(3000, () => {
    console.log("Running server port 3000");
});

// HTTP Server – Stream File with Error Handling
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        const text = fs.createReadStream('input.txt');
        text.on('error', () => {
            console.log("File Error");
            res.statusCode = 500;
            res.end("File Error");
        })
        text.pipe(res);
    }
});
server.listen(3000, () => {
    console.log("Running server port 3000");
});