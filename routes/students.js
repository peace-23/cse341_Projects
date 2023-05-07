const router = require('express').Router();

const validation = require('../middleware/validation');
const controller = require('../controllers/students');


router.get('/', controller.allStudents);
router.get('/:id', controller.singleStudent);

router.post('/', validation.saveStudent, controller.newStudent);
router.put('/:id', validation.saveStudent, controller.updateStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;


