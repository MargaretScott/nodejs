const fs = require('fs');
const fsPromises = require('fs/promises');

// Síncrona
const files = fs.readdirSync('..');

console.log(files);

// Asíncrona
fs.readdir('..', (err, files) => {
    console.log(err);
    console.log(files);
});
console.log('final');

// Promise
// then, catch
fsPromises.readdir('..')
    .then((files) => {
        console.log(files);
    })
    .catch((err) => {
        console.log(err);
    });

// async, await
async function leerDirectorioPromise() {
    try {
        const files = await fsPromises.readdir('..');
        console.log('ASYNC_AWAIT', files);
    } catch (err) {
        console.log(err);
    }
}
leerDirectorioPromise();



(async () => {
    try {
        const files = await fsPromises.readdir('..');
        console.log('ASYNC_AWAIT_2', files);
    } catch (err) {
        console.log(err);
    }
})();


