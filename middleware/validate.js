const validator = require('../helpers/validate');

const saveCourse = (req, res, next) => {
    const validationRule = {
        courseCode: "required|string|alphanum",
        courseName: "required|string",
        creditHours: "int|max:1",
        instructor: "required|string",
        schedule: "string",
        location: "string",
        department: "string"
    };

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
};

const saveStudent = (req, res, next) => {
    const validationRule = {
        firstName: "required|string",
        lastName: "required|string",
        sex: "required|string",
        dob: "required|date",
        email: "string|email",
        classification: "string",
        track: "string",
        major: "required|string",
        enrolledDate: "date",
        plannedGrad: "date"
    };

    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch(err => console.log(err))
};


module.exports = {
    saveCourse,
    saveStudent
};