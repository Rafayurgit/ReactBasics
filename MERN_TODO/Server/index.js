const express =require("express");
const mongoose= require("mongoose");
const cors= require("cors");

const port =3001;

const app= express();
app.use(cors());
app.use(express.json())

app.listen(port, ()=>{
    console.log('server is running')
})