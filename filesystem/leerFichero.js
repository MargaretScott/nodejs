const fs = require('fs');
const fsPromises = require('fs/promises');

// Asíncrono - Callback
fs.readFile('./ficheros/primero.md', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
});

// Asíncrono - Promises
fsPromises.readFile('./ficheros/primero.md', 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


// if (fs.existsSync('./ficheros/primero.md')) {
//     console.log('Existe');
// }

console.log(__dirname);
console.log(__filename);
console.log(process.argv);
