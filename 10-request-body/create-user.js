// HTTP POST Request – Receive User Data
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", (chunk) => {
            console.log(chunk);
            body += chunk;
        })
        req.on("end", () => {
            console.log(JSON.parse(body));
            console.log("Name: ", user.name);
            res.end("Data Recived");
        })
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});