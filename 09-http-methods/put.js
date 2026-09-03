// PUT & PATCH request handle 
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === "PUT" && req.url === "/users") {
        res.end("User Completely Updated");
    }
    else if (req.method === "PATCH" && req.url === "/users") {
        res.end("User Partially Updated");
    }
    else {
        res.end("Users Not Found");
    }
})
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});