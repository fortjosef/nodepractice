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
    //looks like it just overwrites if the file exists
    fs.writeFile('writetest.txt', 'Test Text\n', (err) => {
        if (err) {
            throw err;
        }

        console.log('write finished');
    });
}

//there is also mkdirSync();
if (!fs.existsSync('test-dir')) {
    //throws exception if dir exists
    fs.mkdir('test-dir', (err) => {
        if (err) {
            throw err;
        }

        console.log('dir made');
    });
}

//json can be included directly
//require needs the ./
const jsontest = require('./test.json');
const { RSA_NO_PADDING } = require('constants');

console.log('Jsontest: ' + jsontest.foo);

//appendFiel will create file if it doesnt exist
fs.appendFile('writetest.txt', jsontest.foo + '\n', (err) => {
    console.log('appendfile');
    if (err) {
        throw err;
    }

    console.log('appending complete');
});

if (!fs.existsSync('writetest1.txt')) {
    fs.renameSync('writetest.txt', 'writetest1.txt');
}

//use rename to move files

if (!fs.existsSync('test-dir/writetest1.txt')) {
    fs.rename('writetest1.txt', 'test-dir/writetest1.txt', (err) => {
        if (err) {
            throw err;
        }

        console.log('move finished');
    });
}

fs.unlinkSync('test-dir/writetest1.txt');

//rename can also be used for dirs, dir needs to be empty
if (fs.existsSync('test-dir') && !fs.existsSync('test-dir1')) {
    fs.renameSync('test-dir', 'test-dir1');
}

if (fs.existsSync('test-dir1')) {
    fs.readdirSync('test-dir1').forEach((fileName) => {
        fs.unlinkSync('test-dir1/' + fileName);
    });
    //dir needs to be empty
    fs.rmdir('test-dir1', (err) => {
        if (err) {
            throw err;
        }

        console.log('rmdir complete');
    });
}
