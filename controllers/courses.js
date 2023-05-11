const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const allCourses = async (req, res) => {
        //#swagger.tags=['Courses']
    const result = await mongodb.getDb().db().collection('courses').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const singleCourse = async (req, res) => {
        //#swagger.tags=['Courses']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('courses').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const newCourse = async (req, res) => {
        //#swagger.tags=['Courses']
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
        //#swagger.tags=['Courses']

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


// const db = require('../models');
// const Course = db.courses;


// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.name) {
//         res.status(400).send({ message: 'Content can not be empty!' });
//         return;
//     }

//     // // Create a Temple
//     // const student = new Student({
//     //     firstName: req.body.firstNam,
//     //     lastName: req.body.lastName,
//     //     sex: req.body.sex,
//     //     dob: req.body.dob,
//     //     email: req.body.email,
//     //     classification: req.body.classification,
//     //     track: req.body.track,
//     //     major: req.body.major,
//     //     enrolledDate: req.body.enrolledDate,
//     //     plannedGrad: req.body.plannedGrad
//     // });
//     // Save Temple in the database
//     student
//         .save(student)
//         .then((data) => {
//             console.log(data);
//             res.status(201).send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || 'Some error occurred while creating the Student.',
//             });
//         });
// };

// exports.findAll = (req, res) => {
//     Course.find({})
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || 'Some error occurred while retrieving Sudents.',
//             });
//         });

// };


// // Find a single Temple with an id
// exports.findOne = (req, res) => {
//     const courseName= req.params.courseName;
//     Course.find({ courseName: courseName })
//         .then((data) => {
//             if (!data)
//                 res
//                     .status(404)
//                     .send({ message: 'Not found Course with courseName ' + courseName });
//             else res.send(data[0]);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: 'Error retrieving Course with courseName=' + courseName,
//                 error: err
//             });
//         });

// };

