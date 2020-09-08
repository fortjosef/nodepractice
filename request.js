//use https mod for ssl, what is http2? does HTTP/2
const http = require('http');
const options = {
    hostname: 'www.dethboy.com',
    port: 80,
    path: '/index.php',
    method: 'GET'
};
const request = http.request(options, res => {
    let responseBody;
    res.setEncoding('utf-8');
    res.on('data', (data) => {
        console.log('chunk -- ', data.length);
        responseBody += data;
    });

    res.on('end', () => {
        console.log(responseBody);
    })
});

request.end();