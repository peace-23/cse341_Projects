const router = require('express').Router();

const controller = require('../controllers/courses');
const validation = require('../middleware/validation');

router.get('/', controller.allCourses);
router.get('/:id', controller.singleCourse);

router.post('/', validation.saveCourse, controller.newCourse);
router.put('/:id', validation.saveCourse, controller.updateCourse);
router.delete('/:id', controller.deleteCourse);

module.exports = router;