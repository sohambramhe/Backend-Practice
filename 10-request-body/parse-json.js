// HTTP POST – Parse JSON User Data
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const user = JSON.parse(body);
            console.log("Name:", user.name);
            console.log("Role:", user.role);
            res.end("Data Received");
        });
    }
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});