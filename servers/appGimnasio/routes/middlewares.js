const jwt = require('jsonwebtoken');
const dayjs = require('dayjs');

const checkToken = (req, res, next) => {
    // 1 - Comprobar si el token viene incluido en las cabeceras
    if (!req.headers.authorization) {
        return res.json({ error: 'Debes incluir la cabecera Authorization' });
    }

    // 2 - Comprobar si el token es correcto
    const token = req.headers.authorization;

    let obj;
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (err) {
        return res.json({ error: 'El token es incorrecto' });
    }

    // 3 - Comprobar la expiración del token
    console.log(obj);
    //obj = { usuario_id, fecha_expiracion, iat }
    if (dayjs().unix() > obj.fecha_expiracion) {
        return res.json({ error: 'El token está caducado' });
    }


    next();
}

module.exports = { checkToken };