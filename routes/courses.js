const router = require('express').Router();

const controller = require('../controllers/courses');

router.get('/', controller.allCourses);
router.get('/:id', controller.singleCourses);

router.post('/', controller.newCourses);
router.put('/:id', controller.updateCourses);
router.delete('/:id', controller.deleteCourses);

module.exports = router;