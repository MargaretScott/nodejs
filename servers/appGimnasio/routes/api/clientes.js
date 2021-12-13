const router = require('express').Router();

router.get('/', (req, res) => {
    // - Recuperar todos los clientes de la BD
    // - Organizar los clientes obtenidos de la BD
    // - Enviar los clientes en formato JSON (respuesta)
    res.send('GET de /api/clientes');
});

router.post('/', (req, res) => {
    res.send('POST de /api/clientes');
});

router.put('/', (req, res) => {
    res.send('PUT de /api/clientes');
});

router.delete('/', (req, res) => {
    res.send('DELETE de /api/clientes');
})

module.exports = router;