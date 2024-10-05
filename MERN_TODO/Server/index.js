const express =require("express");
const mongoose= require("mongoose");
const cors= require('cors');
const todoModel = require('./Model/Todo')

const app= express();
app.use(cors());
app.use(express.json())

const port =3001;
mongoose.connect('mongodb://127.0.0.1:27017/test')

app.post('/add', (req, res)=>{
    const task=req.body.task;
    todoModel.create({
        task:task
    }).then(result=>res.json(result))
    .catch(err=> res.json(err))
})

app.get('/get', (req, res)=>{
    todoModel.find()
    .then(result=>res.json(result))
    .catch(err =>res.json(err))
})


app.listen(port, ()=>{
    console.log('server is running')
})