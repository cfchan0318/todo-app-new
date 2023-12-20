const express = require('express')
const router = express.Router();

const todoController = require('../controllers/todo.controller')


router.get('/', (req, res) => {
    todoController.getTodo(req).then(result => {
        res.send(result)
    })
    
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