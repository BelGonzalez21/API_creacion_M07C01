const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

router.get('/', genresController.list);
router.get('/:id', genresController.detail);
router.get('/name/:name', genresController.name);

module.exports = router;