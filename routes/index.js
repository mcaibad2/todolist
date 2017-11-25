const express = require('express');
const router = express.Router();

const root = process.cwd()
const todosController = require(root + '/controllers/todosController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/todos', todosController.create)
router.get('/todos', todosController.read)
router.delete('/todos/:id', todosController.delete)

module.exports = router;


