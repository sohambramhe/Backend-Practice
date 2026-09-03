// HTTP Module – Basic Server
const http = require('http');
const server = http.createServer();

server.listen(3000, () => {
    console.log("Server Started");
});

// HTTP Module – Basic Response
const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Hello Node.js");
});

server.listen(3000, () => {
    console.log("server started");
});
