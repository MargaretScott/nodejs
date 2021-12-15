const router = require('express').Router();

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

router.post('/', async (req, res) => {
    try {
        const result = await clienteModel.create(req.body);

        const cliente = await clienteModel.getById(result.insertId);
        res.json(cliente);
    } catch (err) {
        res.json({ error: err.message });
    }
});







router.put('/:clienteId', async (req, res) => {
    try {
        const result = await clienteModel.updateById(req.params.clienteId, req.body);
        const cliente = await clienteModel.getById(req.params.clienteId);
        res.json(cliente);
    } catch (err) {
        res.json({ error: err.message });
    }
});














router.delete('/:clienteId', (req, res) => {
    clienteModel.deleteById(req.params.clienteId)
        .then(result => {
            if (result.affectedRows === 1) {
                res.json({ mensaje: 'Se ha borrado el cliente' });
            } else {
                res.json({ mensaje: 'El cliente no existe' });
            }
        })
        .catch(err => {
            res.json({ error: err.message });
        });
})

module.exports = router;