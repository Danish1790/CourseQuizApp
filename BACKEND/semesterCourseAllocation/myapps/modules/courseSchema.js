const mongoose = require('mongoose')
const courseSchema = mongoose.Schema({
    coursename : { type : String },
    coursenumber : { type : String },
    semester : { type : String},
    totalmarks : {type : Number}
})

const courseModel = mongoose.model('courses',courseSchema)

module.exports = courseModel;