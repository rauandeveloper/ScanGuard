const http = require('http');
const blockRequests = require('./middlewares/blockRequests');

const server = http.createServer((req, res) => {
    blockRequests(req, res, () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
