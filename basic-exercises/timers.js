const interval = 5000;
const waitInterval = 500;
let currentTime = 0;

const incTime = () => {
    currentTime += waitInterval;
    const pct = Math.floor((currentTime / interval) * 100);
    
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ${currentTime / 1000} seconds, ${pct}% complete`);

}

console.log('start');

const timerFunction = () => {
    clearInterval(intervalObj);
    console.log('\ntimer fired');
}
const intervalObj = setInterval(incTime, waitInterval);
setTimeout(timerFunction, interval);