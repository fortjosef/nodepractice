const readline = require('readline');
const fooMod = require('./mymod');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Wah?", answer => {
    console.log(`duh ${answer}`);
});

foo();
function foo() {
    console.log('foo');
}

fooMod.emmiter.on('func1event', () => console.log('func1event'));

fooMod.func1()
console.log(fooMod.func2(2,3));
fooMod.func2();



//blah();
//functions defined this way are not hoisted
const blah = () => {
    console.log('blah');
}

//you can make a dummy function as a default for a function that has a callback as an arg

function funcWithCallback(arg, callback = foo => foo) {
    //async stuff goes here
    console.log('function stuff goes here');

    callback();
}

funcWithCallback('blah', () => console.log('callback'));
funcWithCallback('blah')