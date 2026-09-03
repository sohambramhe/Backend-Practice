// HTTP Request URL – req.url
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end(req.url);
});
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});
