const router = require('express').Router();

const clientesApiRouter = require('./api/clientes');
const profesoresApiRouter = require('./api/profesores');
const usuariosApiRouter = require('./api/usuarios');

router.use('/clientes', clientesApiRouter);
router.use('/profesores', profesoresApiRouter);
router.use('/usuarios', usuariosApiRouter);

module.exports = router;