const express = require('express');
const router = express.Router();

const controller = require('../controllers/courses');

router.get('/', controller.allCourses);
router.get('/:id', controller.singleCourse);

router.post('/', controller.newCourse);
router.put('/:id', controller.updateCourse);
router.delete('/:id', controller.deleteCourse);

module.exports = router;