const fs = require('fs');
const readStream = fs.createReadStream('./node_modules/bignumber.js/bignumber.js', 'utf-8');

readStream.on('data', (data) => {
    console.log(data.length + ' chars of text');
});

readStream.once('data', (data) => {
    console.log(data);
});

readStream.on('end', () => {
    console.log('finished');
});
