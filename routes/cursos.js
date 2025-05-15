const express = require('express');
const router = express.Router();
const controller = require('../controllers/cursoController');

// Rota para criar curso
router.post('/', controller.create);

// Rota para editar curso
router.post('/edit/:id', controller.update);

// Rota para deletar curso
router.post('/delete/:id', controller.delete);

module.exports = router;
