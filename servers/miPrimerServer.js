const http = require('http');

// Crear servidor
const server = http.createServer((req, res) => {
    // Generar la respuesta a la petición
    console.log(req.url, req.method);
    res.end('Hola server!');
});

server.listen(3000);