const router = require('express').Router();

const controller = require('../controllers/students');

router.get('/', controller.allStudents);
router.get('/:id', controller.singlestudent);

router.post('/', controller.newStudent);
router.put('/:id', controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;