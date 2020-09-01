process.stdout.write('hello\nworld\n', 'utf-8');

process.stdin.on('data', (data) => {
    process.stdout.write(data, 'utf-8');

    process.exit();
});

process.on('exit', () => {
    process.stdout.write(`
    bye\n`, 'utf-8');
});