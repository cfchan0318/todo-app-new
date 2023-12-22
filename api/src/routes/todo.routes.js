const express = require('express')
const router = express.Router();

const todoController = require('../controllers/todo.controller')


router.get('/',   async (req, res) => {
    const result =  await todoController.getTodo(req)
    res.json(result)
});

router.post('/', (req, res) => {
    const description = req.body.description;
    todoController.createTodo(req, description).then(result => {
        res.send(result)
    })
})

router.put('/', (req, res) => {
    res.send('put todo')
})

router.delete('/', (req, res) => {
    res.send('delete todo')
})

module.exports = router;