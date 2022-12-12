const mongoose = require('mongoose')
const resultSchema = mongoose.Schema({
    semesternumber: { type: String, required: true },
    totalcourses: { type: String, required: true },
    students: { type: String, required: true },
    courses: { type: Array, required: false },
})

const semesterModel = mongoose.model('semester', resultSchema)

module.exports = semesterModel;