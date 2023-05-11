const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const allStudents = async (req, res) => {
    //#swagger.tags=['Students']
    const result = await mongodb.getDb().db().collection('students').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

const singleStudent = async (req, res) => {
        //#swagger.tags=['Students']
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('students').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

const newStudent = async (req, res) => {
        //#swagger.tags=['Students']
    const student = {
        firstName: req.body.firstNam,
        lastName: req.body.lastName,
        sex: req.body.sex,
        dob: req.body.dob,
        email: req.body.email,
        classification: req.body.classification,
        track: req.body.track,
        major: req.body.major,
        enrolledDate: req.body.enrolledDate,
        plannedGrad: req.body.plannedGrad
    };
    const result = await mongodb.getDb().db().collection('students').insertOne(student);
    if (result) {
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({
            message: 'Student added succesfully',
            newStudent: result
        });
    } else {
        res.status(500).json({
            message: 'An error occured while creating new student'
        });
    }
};

const updateStudent = async (req, res) => {
        //#swagger.tags=['Students']
    const userId = new ObjectId({ id: req.params.id });
    const student = {
        firstName: req.body.firstNam,
        lastName: req.body.lastName,
        sex: req.body.sex,
        dob: req.body.dob,
        email: req.body.email,
        classification: req.body.classification,
        track: req.body.track,
        major: req.body.major,
        enrolledDate: req.body.enrolledDate,
        plannedGrad: req.body.plannedGrad
    };

    const result = await mongodb
        .getDb()
        .db()
        .collection('students')
        .replaceOne({ _id: userId }, student);
    if (result.modifiedCount > 0) {
        res.status(204).json({
            message: 'Students updated successfully'
        });
    } else {
        res.status(500).json({
            message: 'An error occured while updating'
        });
    }
};

const deleteStudent = async (req, res) => {
        //#swagger.tags=['Students']
    const userId = new ObjectId({ id: req.params.id });
    const student = {
        firstName: req.body.firstNam,
        lastName: req.body.lastName,
        sex: req.body.sex,
        dob: req.body.dob,
        email: req.body.email,
        classification: req.body.classification,
        track: req.body.track,
        major: req.body.major,
        enrolledDate: req.body.enrolledDate,
        plannedGrad: req.body.plannedGrad
    };
    const result = await mongodb
        .getDb()
        .db()
        .collection('students')
        .deleteOne({ _id: userId }, student);
    if (result) {
        res.status(200).json({
            message: 'Student deleted successfully'
        });
    } else {
        res.status(500).json({
            message: 'An error occured while deleting'
        });
    }
};


module.exports = { allStudents, singleStudent, newStudent, updateStudent, deleteStudent };








// const db = require('../models');
// const Student = db.students;

// // // Create a Temple

// //     firstName: req.body.firstNam,
// //     lastName: req.body.lastName,
// //     sex: req.body.sex,
// //     dob: req.body.dob,
// //     email: req.body.email,
// //     classification: req.body.classification,
// //     track: req.body.track,
// //     major: req.body.major,
// //     enrolledDate: req.body.enrolledDate,
// //     plannedGrad: req.body.plannedGrad
// // });

// // Find a single Temple with an id
// exports.findOne = (req, res) => {
//     const student = req.params.student;
//     Student.find({ student: student })
//         .then((data) => {
//             if (!data)
//                 res
//                     .status(404)
//                     .send({ message: 'Not found Student with name ' + student });
//             else res.send(data[0]);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: 'Error retrieving Student with name=' + student,
//                 error: err
//             });
//         });

// };


