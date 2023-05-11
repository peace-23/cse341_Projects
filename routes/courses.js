const express = require('express');
const router = express.Router();

const controller = require('../controllers/courses');

router.get('/', controller.getall);
router.get('/:id', controller.getSingle);

router.post('/', controller.createCourse);
router.put('/:id', controller.updateCourse);
router.delete('/:id', controller.deleteCourse);

module.exports = router;