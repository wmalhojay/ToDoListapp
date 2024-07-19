const mongoose = require('mongoose');
const ToDo = require('./models/toDo');

mongoose.connect('mongodb://localhost:27017/toDoList', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.log('Fatal Error: Could not connect to MongoDB');
        console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
        console.log(error);
    })

const preDefinedData = [
    {
        task: 'Buy groceries',
        dueDate: new Date(2024, 6, 20),
        priority: 'High'
    },
    {
        task: 'Do laundry',
        dueDate: new Date(2024, 6, 21),
        priority: 'Medium'
    },
    {
        task: 'Clean room',
        dueDate: new Date(2024, 6, 22),
        priority: 'Low'
    }
]

ToDo.insertMany(preDefinedData)
    .then(res => {
        console.log(res);
    })
    .catch(e => {
        console.log(e);
    })
