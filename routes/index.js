const express = require('express');
const router = express.Router();

const root = process.cwd()
const todosController = require(root + '/controllers/todosController')

router.post('/todos', todosController.create);
router.get('/todos', todosController.read);
router.delete('/todos/:id', todosController.delete);

module.exports = router;


