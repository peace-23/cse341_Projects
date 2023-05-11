const express = require('express');
const router = express.Router();

const controller = require('../controllers/students');
const validation = require('../middleware/validate');



router.get('/', controller.getAll);
router.get('/:id', controller.getSingle);

router.post('/', validation.saveStudent, controller.createStudent);
router.put('/:id', validation.saveStudent, controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;


