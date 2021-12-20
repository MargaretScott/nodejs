const router = require('express').Router();

const clientesApiRouter = require('./api/clientes');
const profesoresApiRouter = require('./api/profesores');
const usuariosApiRouter = require('./api/usuarios');
const { checkToken, checkRole } = require('./middlewares');

// FIXME: ¿Cómo puedo especificar el role cuando aplico el middleware checkRole?
// ¿Cómo le paso parámetros a un middleware en express?
router.use('/clientes', checkToken, checkRole, clientesApiRouter);
router.use('/profesores', checkToken, profesoresApiRouter);
router.use('/usuarios', usuariosApiRouter);

module.exports = router;

// TODO: Paginar resultados
