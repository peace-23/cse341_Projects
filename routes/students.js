const express = require('express');
const router = express.Router();

const controller = require('../controllers/students');

router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);

router.post('/', controller.newStudent);
router.put('/:id', controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;