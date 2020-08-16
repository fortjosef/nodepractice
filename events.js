const events = require('events');
const emmiter = new events.EventEmitter();

emmiter.on('foo', (arg1, arg2) => console.log(arg1 + ' ' + arg2));
emmiter.emit('foo', 'arg1', 'arg2');