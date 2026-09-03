// DELETE request handle 
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.method === "DELETE" && req.url === "/users") {
        res.end("User Deleted");
    }
})
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});
