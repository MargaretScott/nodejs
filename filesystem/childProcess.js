const exec = require('child_process').exec;

exec(`youtube-dl OPCIONES`, (err, stdout) => {
    console.log(stdout);
});

// axios, got, request