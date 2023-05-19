const express = require('express');
const router = express.Router();


const coursesController = require('../controllers/courses');
const validation = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', coursesController.getall);
router.get('/:id', coursesController.getSingle);

router.post('/', isAuthenticated, validation.saveCourse, coursesController.createCourse);
router.put('/:id', isAuthenticated, validation.saveCourse, coursesController.updateCourse);
router.delete('/:id', isAuthenticated, coursesController.deleteCourse);

module.exports = router;



