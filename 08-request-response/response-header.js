// HTTP Response Header – setHeader()
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Node.js");
})
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});