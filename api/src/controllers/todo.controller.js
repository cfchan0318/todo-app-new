
const db = require('../utils/db')


const getAllTodo = async (req) => {
    const result = {'todos': null, 'error':null}
    try {
        const res = await db.runQuery(req, 'SELECT * FROM TODOS')
        result.todos = res.recordset
        return result;

    } catch (error) {
        result.error = error;
        return result;
    }
}

const getOneTodo = async (req,) => {
    const result = { 'todo': null, 'error': null }

    try {
        const res = await db.runQuery(req, 'SELECT * FROM TODOS')
        result.todo = res.recordset
        return result;

    } catch (error) {
        result.error = error;
        return result;
    }
}

const createTodo = async (req, description) => {
    try {
        const res = await db.runQuery(req, `INSERT INTO todos (description) VALUES ('${description}')`);
        console.log(res)
    } catch (error) {
        
    }
}

module.exports = { getTodo, createTodo }