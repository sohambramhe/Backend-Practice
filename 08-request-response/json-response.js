// HTTP JSON Response
const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    const user = {
        "name": "Soham",
        "role": "MERN Developer"
    };

    res.end(JSON.stringify(user));
})
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});