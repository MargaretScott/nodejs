const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const executeQuery = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

const executeQueryOne = (sql, values = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, values, (err, result) => {
            if (err) return reject(err);
            if (result.length === 0) return resolve(null);
            resolve(result[0]);
        });
    });
}

const createToken = (usuario) => {
    const obj = {
        usuario_id: usuario.id,
        fecha_expiracion: dayjs().add(1, 'week').unix()
    }
    // TODO: mover datos al fichero de entorno
    return jwt.sign(obj, 'en un lugar de la mancha');
}

module.exports = {
    executeQuery, executeQueryOne, createToken
}