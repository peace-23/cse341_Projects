const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const allCourses = async (req, res) => {
    const result = await mongodb.getDb().db().collection('courses').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const singleCourse = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('courses').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const newCourse = async (req, res) => {
    const course = {
        courseCode: req.body.courseCode,
        courseName: req.body.courseName,
        creditHours: req.body.creditHours,
        instructor: req.body.instructor,
        schedule: req.body.schedule,
        location: req.body.location,
        department: req.body.department
    };
    const result = await mongodb.getDb().db().collection('courses').insertOne(course);
    if (result) {
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({
            message: 'Course added succesfully',
            newCourse: result
        });
    } else {
        res.status(500).json({
            message: 'An error occured while creating new course'
        });
    }
};

const updateCourse = async (req, res) => {
    const userId = new ObjectId({ id: req.params.id });
    const course = {
        courseCode: req.body.courseCode,
        courseName: req.body.courseName,
        creditHours: req.body.creditHours,
        instructor: req.body.instructor,
        schedule: req.body.schedule,
        location: req.body.location,
        department: req.body.department
    };

    // ObjectId.updateOne({ id: req.params.id}, book-series)
    const result = await mongodb
        .getDb()
        .db()
        .collection('courses')
        .replaceOne({ _id: userId }, course);
    if (result.modifiedCount > 0) {
        res.status(204).json({
            message: 'course updated successfully'
        });
    } else {
        res.status(500).json({
            message: 'An error occured while updating'
        });
    }
};

const deleteCourse = async (req, res) => {
    const userId = new ObjectId({ id: req.params.id });
    const course = {
        courseCode: req.body.courseCode,
        courseName: req.body.courseName,
        creditHours: req.body.creditHours,
        instructor: req.body.instructor,
        schedule: req.body.schedule,
        location: req.body.location,
        department: req.body.department
    };
    const result = await mongodb
        .getDb()
        .db()
        .collection('courses')
        .deleteOne({ _id: userId }, course);
    if (result) {
        res.status(200).json({
            message: 'Course deleted successfully'
        });
    } else {
        res.status(500).json({
            message: 'An error occured while deleting'
        });
    }
};


module.exports = { allCourses, singleCourse, newCourse, updateCourse, deleteCourse };
