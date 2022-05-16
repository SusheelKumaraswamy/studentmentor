const studentmodule = require('../module/module');

const express = require('express');

const router = express.Router();

router.post('/createstudent',studentmodule.createStudent);

router.post('/createteacher',studentmodule.cretaeTeacher);

router.put('/updateteacher/:teacherid',studentmodule.updateTeacher);

router.get('/findstudentwithnomentordetials',studentmodule.findmentornotupdated);

router.put('/mentorassigntostudent/:studentid',studentmodule.mentorassigntostudent);

router.get('/findstudentassignedtomentomentor/:mentorid',studentmodule.findstudentsassignedtomentor);


module.exports =router;
