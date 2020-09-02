const path = require('path');
const util = require('util');
//to get one function
const {log} = require('util');
const v8 = require('v8');
const testDir = path.join(__dirname, 'foo', 'bar', 'bar');

console.log(testDir);
util.log(testDir);
util.log(v8.getHeapStatistics());
log('destructure test');