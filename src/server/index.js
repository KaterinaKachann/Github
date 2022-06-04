const http = require('http');

const requestListener = function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('Server listen http://localhost:8080')