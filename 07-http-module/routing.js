// HTTP Routing – Home & About
const http = require("http");
const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home Page");
    }
    else if (req.url === "/about") {
        res.end("About Page");
    }

});

server.listen(3000, () => {
    console.log("Server Started");
});

// HTTP Routing – 404 Page
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Home Page");
    }
    else if (req.url === "/about") {
        res.end("About Page");
    }
    else {
        res.end("Not Found this Page!");
    }
});

server.listen(3000, () => {
    console.log("Server started");
});

// HTTP Method – GET Request
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === GET) {
        console.log(req.method);
        res.end("GET Request");
    }
});
server.listen(3000, () => {
    console.log("Server started");
});

// HTTP Routing – Home/About/Contact
const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Requested URL: ", req.url);
    if (req.url === "/") {
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.end("About Page");
    }
    else if (req.url === "/contact") {
        res.end("Contact Page");
    }
    else {
        res.end("404 Page Not Found");
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});