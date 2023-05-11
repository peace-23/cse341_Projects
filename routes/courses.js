const express = require('express');
const router = express.Router();


const controller = require('../controllers/courses');
const validation = require('../middleware/validate');

router.get('/', controller.getall);
router.get('/:id', controller.getSingle);

router.post('/', validation.saveCourse, controller.createCourse);
router.put('/:id', validation.saveCourse, controller.updateCourse);
router.delete('/:id', controller.deleteCourse);

module.exports = router;



