const router = require('express').Router();

const clientesApiRouter = require('./api/clientes');
const profesoresApiRouter = require('./api/profesores');
const usuariosApiRouter = require('./api/usuarios');
const { checkToken } = require('./middlewares');

router.use('/clientes', checkToken, clientesApiRouter);
router.use('/profesores', checkToken, profesoresApiRouter);
router.use('/usuarios', usuariosApiRouter);

module.exports = router;


// TODO: Middleware para roles
// TODO: Sacar datos al fichero de entorno (.env)
// TODO: cors
// TODO: App Angular
