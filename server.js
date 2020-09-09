const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.end(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>Node.js Server</title>
    </head>
    <body>
    <h1>Hello World</h1>
    Method: ${req.method}<br>
    URL: ${req.url}<br>
    </body>
    </html>
    `)
}).listen(3000);

console.log('server listening');