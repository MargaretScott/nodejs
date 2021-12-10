const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Recupero todos los productos');
});

module.exports = router;