
const db = require('../utils/db')

const getTodo = async (req) => {
    const result = await db.runQuery(req, 'SELECT * FROM todos');
    if (result) {
        return result.recordset;
    } else {
        return;
    }
}

const createTodo = async (req, description) => {
    const result = await db.runQuery(req, `INSERT INTO todos (description) VALUES ('${description}')`);
    if (result) {
        return result
    } else {
        return;
    }
}

module.exports = { getTodo, createTodo }