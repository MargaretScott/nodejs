const router = require('express').Router();
const usuarioModel = require('../../models/usuario.model');
const bcrypt = require('bcryptjs');

router.post('/registro', async (req, res) => {

    // TODO: Validación de req.body

    try {

        req.body.password = bcrypt.hashSync(req.body.password);

        const result = await usuarioModel.create(req.body);

        if (result.affectedRows === 1) {
            res.json({ success: 'Usuario registrado correctamente' });
        } else {
            res.json({ error: 'No se ha podido registrar el usuario' });
        }
    } catch (err) {
        res.json({ error: err.message });
    }
});















router.post('/login', (req, res) => {

});

module.exports = router;