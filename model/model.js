const mongoose = require('mongoose');
const schema   = mongoose.Schema;

const studentschema= new schema({
    Name:{
        type:String,
        minLength:5,
        maxLength:100,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Group:{
        type:String,
        Enum:['Computer Science','Bio Maths','Commerse']
    },
    MentorID:{
        type:Number,
        Enum:[1,2,3,4]
    },
    StudentID:{
        type:Number
    }

});

const teacherschema= new schema({
    Name:{
        type:String,
        minLength:5,
        maxLength:100,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Group:{
        type:String,
        Enum:['Computer Science','Bio Maths','Commerse']
    },
    MentorID:{
        type:Number,
    },
    studentID:{
        type:Array
    }

});

const student = mongoose.model('Student',studentschema);
const teacher = mongoose.model('Teacher',teacherschema);

module.exports= {student,teacher};