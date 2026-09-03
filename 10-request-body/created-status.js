// HTTP POST – Set 201 Created Status
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            console.log(body);
            res.statusCode = 201;
            res.end("User Created");
        })
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});