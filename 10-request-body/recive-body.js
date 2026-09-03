// Create a POST /users route that receives request body
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        })
        req.on("end", () => {
            console.log(body);
            res.end("Data Recived!");
        })
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});