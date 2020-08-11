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

fooMod.func1()
console.log(fooMod.func2(2,3));
fooMod.func2();

//blah();
//functions defined this way are not hoisted
const blah = () => {
    console.log('blah');
}