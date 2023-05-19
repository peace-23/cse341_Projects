const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;



const getAll = async (req, res) => {
    //#swagger.tags=['Students']
    const result = await mongodb.getDb().db().collection('students').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};



const getSingle = async (req, res) => {
    //#swagger.tags=['Students']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('A valid student id is required to find a student information')
    }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('students').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};


const createStudent = async (req, res) => {
    //#swagger.tags=['Students']
    console.log(req.body)
    const student = {
        firstName: req.body.firstName,
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
    const response = await mongodb.getDb().db().collection('students').insertOne(student);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occured. Student not  created.');
    }
};


const updateStudent = async (req, res) => {
    //#swagger.tags=['Students']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('A valid student id is required to update a student information')
    }
    const userId = new ObjectId(req.params.id);
    const student = {
        firstName: req.body.firstName,
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
    const response = await mongodb
        .getDb()
        .db()
        .collection('students')
        .replaceOne({ _id: userId }, student);
    console.log(response);
    if (response.modifiedCount > 0) {
        res.status(204).send('Student updated successfully!');
    } else {
        res.status(500).json(response.error || 'Some error occurred while updating with studnet Id.');
    }
};


const deleteStudent = async (req, res) => {
    //#swagger.tags=['Students']
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('A valid student id is required to delete a student information')
    }
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
        .getDb()
        .db()
        .collection('students')
        .remove({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(200).send('Student deleted successfully');
    } else {
        res.status(500).json(response.error || 'Some error occurred while deleting a student with this Id.');
    }
};

module.exports = { getAll, getSingle, createStudent, updateStudent, deleteStudent };


