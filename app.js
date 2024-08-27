import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connect } from 'mongoose';
import { customizedMulter } from './multer.js';
import { userModel } from './Models/userModel.js';

const app = express()
dotenv.config();
app.use(express.static("public"))
app.use(express.json())
const PORT = process.env.SERVER_PORT
const URI = process.env.URI

app.get('/',(req,res)=>{
    res.send("ana sehife")
})

app.get('/login',(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
})

app.post('/register',customizedMulter.single('avatar'),(req,res)=>{
    const {username,surname,age,telephone,email,password} = req.body
    const user = userModel.create({username,surname,age,telephone,email,password,photo:`/${filename}`})
    res.send(user)
})






app.listen(PORT,()=>{
    console.log("server is up")

    connect(URI).then(()=>{
        console.log("connected to the mongooDB")
    })
})