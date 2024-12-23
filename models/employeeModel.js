const mongoose = require('mongoose')

const employSchema = mongoose.Schema({
    firstName:  {
        type:String,
        required:true
    },
    lastName:  {
        type:String,
        required:true
    },
    email:  {
        type:String,
        required:true
    },
    department:  {
        type:String,
        required:true
    },
    designation:  {
        type:String,
        required:true
    },
    dateOfJoining:  {
        type:String,
        required:true
    },
    salary:  {
        type:String,
        required:true
    },
})

const employModel = mongoose.model('emplyees',employSchema)

module.exports = employModel