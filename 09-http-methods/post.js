// POST request handle 
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/users") {
        res.statusCode = 201;
        res.end("User Created");
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});