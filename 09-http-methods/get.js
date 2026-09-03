// GET request handle
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/users") {
        res.end("Users Data");
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});
