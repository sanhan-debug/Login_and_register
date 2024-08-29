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
app.use(express.urlencoded({extended:true}))
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

app.get('/search',(req,res)=>{
    res.sendFile(path.resolve('./views/chekUser.html'))
})

app.post('/register',customizedMulter.single('avatar'),(req,res)=>{
    const {username,surname,age,telephone,email,password} = req.body
    const {filename} = req.file
    console.log(req.file)
    const user = userModel.create({username,surname,age,telephone,email,password,photo:`/${filename}`})
    res.send(user)
    console.log(user)
})


app.post('/search',async (req,res)=>{
    const usernameInput = req.body.username
    // console.log(usernameInput)
    try{
        const user = await userModel.findOne({username:usernameInput})
        if(user){
            res.json(user)
        }
    }catch(err){
        console.error(err)
    }
})






app.listen(PORT,()=>{
    console.log("server is up")

    connect(URI).then(()=>{
        console.log("connected to the mongooDB")
    })
})