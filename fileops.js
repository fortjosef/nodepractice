const fs = require('fs');
console.log('before');
//synchronous
const files = fs.readdirSync('./node_modules');
console.log('after');
console.log(files);

//async
console.log('before');
fs.readdir('node_modules', (err, files) => {
    if (err) {
        throw err;
    }
    console.log('after');
    console.log(files);
});

