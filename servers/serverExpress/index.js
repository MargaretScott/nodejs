// Require de la librería Express
const express = require('express');

require('dotenv').config();

// Creación de la aplicación de Express
const app = express();

// Manejadores de rutas - Handlers
app.get('/', (req, res) => {
    res.end('Ruta raiz!');
});

app.get('/contacto', (req, res) => {
    res.end('Ruta contacto');
});

app.get('/personas', (req, res) => {
    const arrPersonas = [
        { nombre: 'Mario', apellidos: 'Girón', edad: 27 },
        { nombre: 'Laura', apellidos: 'Martín', edad: 35 },
        { nombre: 'Rocío', apellidos: 'López', edad: 19 },
        { nombre: 'Luis', apellidos: 'Romero', edad: 45 }
    ];
    res.json(arrPersonas);
})

app.post('/create', (req, res) => {
    res.end('Ruta POST create');
});

// Servidor escuchando sobre un puerto
// let PORT;
// if (process.env.PORT) {
//     PORT = process.env.PORT;
// } else {
//     PORT = 3000;
// }

// let PORT = 3000;
// if (process.env.PORT) {
//     PORT = process.env.PORT;
// }

// const PORT = process.env.PORT ? process.env.PORT : 3000;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('App escuchando en puerto ' + PORT);
});

/**
 * GET http://localhost:3000
 * GET http://localhost:3000/contacto
 * POST http://localhost:3000/create
 * GET http://localhost:3000/personas
 * 
 * GET http://localhost:3000/api/productos
 * GET http://localhost:3000/api/usaurios
 * GET http://localhost:3000/api/clientes
 */