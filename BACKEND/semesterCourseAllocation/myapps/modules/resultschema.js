const mongoose = require('mongoose')
const resultSchema = mongoose.Schema({
    studentname:{ type : String },
    coursename : { type : String },
    coursenumber : { type : String },
    obtainedmarks : {type : Number},
    totalmarks : {type : Number},
})

const resultModel = mongoose.model('results',resultSchema)

module.exports = resultModel;