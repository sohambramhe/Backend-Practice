// 43. HTTP Routing
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Home Page");
    }
    else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("About Page");
    }
    else if (req.url === "/user") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");

        const user = {
            name: "Soham",
            role: "MERN Developer"
        };

        res.end(JSON.stringify(user));
    }
    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});

// HTTP API request handle
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/users") {
        res.statusCode = 200;
        res.end("Users Data");
    }
    else if (req.method === "POST" && req.url === "/users") {
        res.statusCode = 201;
        res.end("Users Created");
    }
    else if (req.method === "PUT" && req.url === "/users") {
        res.statusCode = 200;
        res.end("Users Completely Updated");
    }
    else if (req.method === "PATCH" && req.url === "/users") {
        res.statusCode = 200;
        res.end("Users Partially Updated");
    }
    else if (req.method === "DELETE" && req.url === "/users") {
        res.statusCode = 200;
        res.end("Users Deleted");
    }
    else {
        res.statusCode = 404;
        res.end("Route Not Found");
    }
})
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});