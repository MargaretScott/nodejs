// Los manejadores tienen el prefijo /clientes
const router = require('express').Router();

// GET http://localhost:3000/clientes
router.get('/', (req, res) => {
    // - Recuperar todos los clientes de la BD
    // - Organizar los clientes recuperados de la BD
    // - Renderizar un HTML con dichos clientes
    res.send('Lista de clientes');
});

// GET http://localhost:3000/clientes/new
router.get('/new', (req, res) => {
    res.send('Formulario para crear clientes');
});

// GET http://localhost:3000/clientes/edit/899
router.get('/edit/:clienteId', (req, res) => {
    res.send('Formulario de edición')
});

// GET http://localhost:3000/clientes/delete/899
router.get('/delete/:clienteId', (req, res) => {
    res.send('Borramos el cliente');
});

// POST http://localhost:3000/clientes/create
router.post('/create', (req, res) => {
    res.send('Creamos un nuevo cliente');
});

// POST http://localhost:3000/clientes/update
router.post('/update', (req, res) => {
    res.send('Actualiza un cliente');
});

module.exports = router;