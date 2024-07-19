const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const mongoose = require("mongoose");
const app = express();
const ToDo = require('./models/toDo')

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost:27017/toDoList', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.log('Fatal Error: Could not connect to MongoDB');
        console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
        console.log(error);
    })

app.get('/', async (req, res) => {
    const list = await ToDo.find({})
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log('Error: Could not fetch data');
            console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
            console.log(error);
        })
    res.render('toDoList/index.ejs', { list });
})

app.get('/toDoList/new', async (req, res) => {
    const list = await ToDo.find({})
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log('Error: Could not fetch data');
            console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
            console.log(error);
        })
    res.render('toDoList/new', { list });
})

app.put('/toDoList/new/done', async(req, res) => {
    const {task, priority, dueDate} = req.body;
    const newTask = new ToDo({
        task,
        priority,
        dueDate
    })
    await newTask.save()
        .then(() =>{
            console.log('Task added successfully');
        })
        .catch((err) => {
            console.log('Error: Could not add task');
            console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
            console.log(err);
        })
    res.redirect('/');
})

app.get('/toDoList/edit/:id', async (req, res) => {
    const id = req.params.id;
    const {task, done, dueDate, priority} = await ToDo.findById(id)
    const list = await ToDo.find({})
        .then((data) => {
            return data;
        })
        .catch((error) => {
            console.log('Error: Could not fetch data');
            console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
            console.log(error);
        })
    res.render('toDoList/edit', { id, task, done, dueDate, priority, list });
})

app.patch('/toDoList/edit/:id/done', async (req, res) => {
    const id = req.params.id;
    const {task, done, dueDate, priority} = req.body;
    await ToDo.findByIdAndUpdate(id, {task, done, dueDate, priority})
        .then(()=>{
            console.log('Task updated successfully');
        })
        .catch((error) => {
            console.log('Error: Could not update task');
            console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
            console.log(error);
        })
    res.redirect('/');
})

app.delete('/toDoList/delete/:id', async (req, res) => {
    const id = req.params.id;
    await ToDo.findByIdAndDelete(id)
        .then(()=>{
            console.log('Task deleted successfully');
        })
        .catch((error) => {
            console.log('Error: Could not delete task');
            console.log('-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-');
            console.log(error);
        })
    res.redirect('/');
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})