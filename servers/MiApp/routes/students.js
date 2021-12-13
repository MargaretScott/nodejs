const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Ruta /students GET');
});

router.post('/create', (req, res) => {
    res.send('Ruta /students/create POST');
});

router.put('/edit', (req, res) => {
    console.log(req.fechaActual);
    res.send('Ruta /students/edit PUT');
});

router.delete('/delete', (req, res) => {
    res.send('Ruta /students/delete DELETE')
})

module.exports = router;