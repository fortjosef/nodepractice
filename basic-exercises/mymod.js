//i guess it must be dereferenced to a specific name?
const {EventEmitter} = require('events');

const emmiter = new EventEmitter();

function func1() {
    emmiter.emit('func1event')
    console.log('function 1');
}

//arrow functions have an impicit return if there is no block
const func2 = (x, y) => x * y;

const func3 = () => console.log('func 3');

//console.log(func2(2, 2));
module.exports = {
    func1,
    func2,
    func3,
    emmiter
};