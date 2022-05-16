const {student,teacher}= require('../model/model');

exports.createStudent= async(req,res)=>{
    const studentData = new student({...req.body});
    console.log("In Create")
    try {
        var response = await studentData.save();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

exports.cretaeTeacher= async(req,res)=>{
    const teacherData = new teacher({...req.body});
    try {
        var response = await teacherData.save();
        res.send(response);
    } catch (error) {
        console.log(error);
    }
}

exports.updateTeacher = async(req,res) =>{
    try {
        var updateteach = await teacher.findOneAndUpdate({_id:req.params.teacherid},{$push:{...req.body}},{runValidators:true,new:true});
        // console.log(req.body);
        res.send(updateteach);
    } catch (error) {  
        console.log(error);
    }
}

exports.findmentornotupdated = async(req,res)=>{
    try {
        var findmentornotupdated = await student.find({MentorID:{$exists:false}});
        res.send(findmentornotupdated);
    } catch (error) {
        console.log(error);
    }
}

exports.mentorassigntostudent = async (req,res)=>{
    try {
        console.log("Updating.....")
        var mentorassigntostudent = await student.findOneAndUpdate({_id:req.params.studentid},{...req.body},{runValidators:true,new:true});
        res.send(mentorassigntostudent);
    } catch (error) {
        console.log(error);
    }
}

exports.findstudentsassignedtomentor = async (req,res)=>{
    try {
        var findstudentsassignedtomentor = await student.find({MentorID:req.params.mentorid});
        res.send(findstudentsassignedtomentor);
    } catch (error) {
        console.log(error);
    }
}