const express = require('express')
const router = express.Router()
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken')
const path = require('path')
// const result = require('../modules/resultSchema');
const result = require('../modules/resultschema');

const {userVerify} = require('./index')



router.get('/result', async function(req,res){
    await  result.find({})
    .then(data => {
      res.json({resultData : data})
    })
  })

  router.get('/showresult/:id',userVerify,  async function(req,res){
    var _id = req.params.id
    result.findById({_id})
    .then(data => {
        console.log(data)
        res.json({resultdata:data})
    })
  })  

router.post('/registerresult',async function (req, res) {
    await new result({
        studentname:req.body.studentname,
        coursename:req.body.coursename,
        coursenumber:req.body.coursenumber,
        obtainedmarks:req.body.obtainedmarks,
        totalmarks:req.body.totalmarks
    }).save().then(data => {
        console.log(data)
        res.json({resultData : data})
    })
})


router.delete('/deleteresult/:id',userVerify,function(req,res){
    var id = req.params.id
    result.findByIdAndDelete(id)
    .then(data => {
      res.json({resultData : data , msg : "result Delete Successfully"})
    })
    
})

router.put('/updateresult/:id',userVerify, function(req,res){
    var id = req.params.id
    result.findByIdAndUpdate(id,{
        resultnumber : req.body.resultnumber,
        totalcourses : req.body.totalcourses,
        students : req.body.students
    })
    .then(data => {
        console.log(data)
        res.json({data:data , msg: "Update result Successfully"})
    })
})

router.put('/updateresultof/:id', userVerify,function(req,res){
    var id = req.params.id
    result.findByIdAndUpdate(id,{$push: {courses: id}},{
        resultnumber : req.body.resultnumber,
        totalcourses : req.body.totalcourses,
        students : req.body.students,
        courses : req.body.courses
    })
    .then(data => {
        console.log(data)
        res.json({data:data , msg: "PUSH ID Successfully"})
    })
})


module.exports = router;