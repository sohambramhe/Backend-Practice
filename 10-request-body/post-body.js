// HTTP POST – User Data + 404 Routing
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on('data', (chunk) => {
            body += chunk;
        })
        req.on('end', () => {
            const user = JSON.parse(body);
            res.end("Name: ", body.name);
            res.end("Role: ", body.role);
            res.statusCode = 201;
            res.end("User Created");
        })
    }
    else {
        res.statusCode = 404;
        res.end("Route Not Found");
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});