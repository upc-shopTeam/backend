const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    firstName:{
        type:String,
        require: true
    },
    lastName:{
        type:String,
        require: true
    },
    email: {
        type:String,
        require:true
    },
    hireDate:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    numberPhone:{
        type:String,
        require:true
    }


})
module.exports=mongoose.model('Employees',employeeSchema)