console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

//you can so the equivilant of a php list with this
const [nodeloc, scriptloc, firstarg, lastarg] = process.argv;

console.log(`fisrstarg ${firstarg} secondarg ${lastarg}`);
