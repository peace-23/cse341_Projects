const validator = require('../helpers/validator');

const saveCourse = async (req, res, next) => {
    const validationRule = {
        "courseCode": "required|string|alphanum",
        "courseName": "required|string",
        "creditHours": "required|number|max:1",
        "instructor": "required|string",
        "schedule": "required|string",
        "location": "required|string",
        "department": "required|string"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
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

const saveStudent = async (req, res, next) => {
    const validationRule = {
        "firstName": "required|string",
        "lastName": "required|string",
        "sex": "required|string|valid:M,F",
        "dob": "required|date",
        "email": "required|string|email",
        "classification": "required|string",
        "track": "required|string",
        "major": "required|string",
        "enrolledDate": "required|date",
        "plannedGrad": "required|date"
    };

    await validator(req.body, validationRule, {}, (err, status) => {
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