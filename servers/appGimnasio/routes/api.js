const router = require('express').Router();

const clientesApiRouter = require('./api/clientes');

router.use('/clientes', clientesApiRouter);

module.exports = router;