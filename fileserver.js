const {createServer} = require('http');
const {createReadStream} = require('fs');

const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {'Content-Type': type});
    createReadStream(filePath).pipe(res);
}

createServer((req, res) => {

    switch(req.url) {
        case '/':
            return sendFile(res, 200, 'text/html', './simple_site/index.html');
        case '/images/image.gif':
            return sendFile(res, 200, 'image/gif', './simple_site/images/image.gif');
        case '/styles.css':
            return sendFile(res, 200, 'text/css', './simple_site/styles.css');
        default:
            return sendFile(res, 404, 'text/html', './simple_site/404.html');
    }
}).listen(3000);

console.log('Site Running');