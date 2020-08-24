const fs = require('fs');
console.log('before');
//synchronous
const files = fs.readdirSync('./node_modules');
console.log('after');
console.log(files);

//async

fs.readdir('node_modules', (err, files) => {
    if (err) {
        throw err;
    }
    console.log('after');
    console.log(files);
});

console.log('before');

//if you dont supply encoding it returns a buffer full of hex codes
//ommiting encoding means you want it read as binary
const text = fs.readFileSync('./README', 'utf-8');

console.log(text);

fs.readFile('package-lock.json', 'utf-8', (err, data) => {
    console.log(data);
});

//can also use writeFielSync();
if (!fs.existsSync('writetest.txt')) {
    fs.writeFile('writetest.txt', 'Test Text\n', (err) => {
        if (err) {
            throw err;
        }

        console.log('write finished');
    });
}