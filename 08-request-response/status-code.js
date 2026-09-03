// HTTP Status Code – res.statusCode
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end("Success");
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});