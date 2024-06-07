const mongoose = require("mongoose")


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true,'must provide name'],
        trim : true,
        maxlength: [40, 'Name cannot be more than 40 character']
    },
    description:{
        type: String,
        required : [true,'Short description is needed'],
        trim : true,
        maxlength: [70, 'Name cannot be more than 70 character']

    },
    completed: {
        type: Boolean,
        default: false
    }
})


module.exports =  mongoose.model('Task', TaskSchema);