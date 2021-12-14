// Todas las sentencias SQL que vamos ejecutar sobre la tabla clientes

const req = require("express/lib/request");

// TODO: refactorizar métodos
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from clientes', (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

const getById = (clienteId) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from clientes where id = ?',
            [clienteId],
            (err, result) => {
                if (err) return reject(err);
                if (result.length === 0) return resolve(null); // No se encuentra el cliente
                resolve(result[0]); // Devolvemos el cliente encontrado
            }
        );
    });
}

const getByEdad = (edad) => {
    return new Promise((resolve, reject) => {
        db.query(
            'select * from clientes where edad > ?',
            [edad],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
    });
}

const create = ({ nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into clientes (nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni) values(?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}

module.exports = {
    getAll, getById, getByEdad, create
}