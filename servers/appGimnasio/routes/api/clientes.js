const router = require('express').Router();

// TODO: hablar del destructuring
const clienteModel = require('../../models/cliente.model');






// router.get('/', (req, res) => {
//     clienteModel.getAll()
//         .then((result) => {
//             res.json(result);
//         })
//         .catch((err) => {
//             res.json({ error: err.message });
//         });
// });

router.get('/', async (req, res) => {
    try {
        const result = await clienteModel.getAll();
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    };
});

router.get('/mayores/:edad', async (req, res) => {
    try {
        // TODO: hablar del destructuring
        const result = await clienteModel.getByEdad(req.params.edad);
        res.json(result);
    } catch (err) {
        res.json({ error: err.message });
    }
});

router.get('/:clienteId', (req, res) => {
    const clienteId = req.params.clienteId;
    /**
     * getById
     *  - 1 rechazarse por error -> catch
     *  - 2 resuelve null porque no encuentra el cliente -> then
     *  - 3 resuelve con el cliente -> then
     */
    clienteModel.getById(clienteId)
        .then(result => {
            if (!result) return res.json({ error: 'El cliente no existe' });
            res.json(result)
        })
        .catch(err => res.json({ error: err.message }));
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