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

app.post('/create', (req, res) => {
    res.end('Ruta POST create');
});

// Servidor escuchando sobre un puerto
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('App escuchando en puerto ' + PORT);
});

/**
 * GET http://localhost:3000
 * GET http://localhost:3000/contacto
 * POST http://localhost:3000/create
 * 
 * GET http://localhost:3000/api/productos
 * GET http://localhost:3000/api/usaurios
 * GET http://localhost:3000/api/clientes
 */