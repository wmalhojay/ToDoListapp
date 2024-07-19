const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    task: {
        type:String,
        required:true
    },
    done: {
        type:Boolean,
        default:false,
        required:true
    },
    dueDate: {
        type:Date,
        required:true
    },
    priority: {
        type:String,
        enum:['Low', 'Medium', 'High'],
        required:true
    }
})

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;