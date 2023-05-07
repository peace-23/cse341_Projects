const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.students = require('./students.js')(mongoose);
db.courses = require('./courses.js')(mongoose);

module.exports = db;
