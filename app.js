import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connect } from 'mongoose';

const app = express()
dotenv.config();
app.use(express.static("public"))
const PORT = process.env.SERVER_PORT
const URI = process.env.URI

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
})

app.listen(PORT,()=>{
    console.log("server is up")

    connect(URI).then(()=>{
        console.log("connected to the mongooDB")
    })
})