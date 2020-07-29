process.stdout.write('hello\nworld\n');

process.stdin.on('data', (data) => {
    process.stdout.write(data);

    process.exit();
});

process.on('exit', () => {
    process.stdout.write(`
    bye\n`);
});