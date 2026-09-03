// HTTP Request Information – URL/Method/Status
const http = require('http');
const server = http.createServer((req, res) => {
    console.log("URL: ", req.url);
    console.log("Method: ", req.method);
    res.statusCode = 200;
    console.log("Status: ", res.statusCode);
    res.end("Request Successful");
})
server.listen(3000, () => {
    console.log("Server Started on Port 3000");
});
