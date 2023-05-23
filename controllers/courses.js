const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const getall = async (req, res) => {
    //#swagger.tags=['Courses']
    // #swagger.summary=Get full course list
    // #swagger.description=To get all courses, Create multiple courses
    const result = await mongodb.getDb().db().collection('courses').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const getSingle = async (req, res) => {
    //#swagger.tags=['Courses']
    // #swagger.summary=Get course by Id
    // #swagger.description=To get a course by Id, Create a course
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('A valid course id is required to find a course')
    }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('courses').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const createCourse = async (req, res) => {
    //#swagger.tags=['Courses']
    // #swagger.summary=Create new course
    // #swagger.description=Adds a new course to the database
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
    //#swagger.tags=['Courses']
    // #swagger.summary=Update course by Id
    // #swagger.description=To update a course by Id, create a course
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('A valid course id is required to update a course')
    }
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
        .replaceOne({ _id: userId }, course);
    if (result.modifiedCount > 0) {
        res.status(204).send('Response Received');
    } else {
        res.status(500).json({
            message: 'An error occured while updating'
        });
    }
};

const deleteCourse = async (req, res) => {
    //#swagger.tags=['Courses']
    // #swagger.summary=Deletes course by Id
    // #swagger.description=To delete a course by Id, create a course
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('A valid course id is required to delete a course')
    }
    const userId = new ObjectId({ id: req.params.id });
    const result = await mongodb
        .getDb()
        .db()
        .collection('courses')
        .deleteOne({ _id: userId }, true);
    console.log(response);
    if (result.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(response.result || 'An error occured while deleting.');
    }
    // if (result) {
    //     res.status(200).json({
    //         message: 'Course deleted successfully'
    //     });
    // } else {
    //     res.status(500).json({
    //         message: 'An error occured while deleting'
    //     });
    // }
};


module.exports = { getall, getSingle, createCourse, updateCourse, deleteCourse };


