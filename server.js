var http = require('http');

http.createServer(function (req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('ESHTA AWYYYYYY');
    
}).listen(process.env.PORT || 8080);
