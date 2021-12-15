const { executeQuery } = require('../helpers');

const create = ({ nombre, username, email, password }) => {
    return executeQuery('insert into usuarios (nombre, username, email, password, role) values (?, ?, ?, ?, ?)', [nombre, username, email, password, 'regular']);
}

module.exports = { create };