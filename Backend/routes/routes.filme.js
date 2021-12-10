const express = require('express');
const router = express.Router();

const filmesController = require('../controllers/controllers.filme')

router.get('/get-filmes', filmesController.getFilmesController)

router.get('/get-by-id/:id', filmesController.getFilmesByIdController)

router.post('/create', filmesController.createFilmeController)

router.put('/update/:id', filmesController.updateFilmeController)

router.delete('/delete/:id', filmesController.deleteFilmeController)
module.exports = router;

