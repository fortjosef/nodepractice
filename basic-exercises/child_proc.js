const cp = require('child_process');

//exec is for synchronous commands
//if no output no need for second arg
cp.exec('ls', (err, data, stderr) => {
    if (err) {
        throw err;
    }
    //looks like its returned all at once and not line by line like in php
    console.log('line ' + data);

    if (stderr) {
        //has expected error from the terminal
        //will not happen if throwing err
        console.log(stderr);
    }
});

const viApp = cp.spawn('node', ['question.js']);

viApp.stdin.write('foooo\n');

viApp.stdout.on('data', (data) => {
    console.log(data);
});

viApp.on('close', () => {
    console.log('app closed');
});