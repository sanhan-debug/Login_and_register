import { Schema,model } from "mongoose";

const userSchema = new Schema({
    username:String,
    surname:String,
    age:Number,
    telephone:Number,
    email:String,
    password:String,
    photo:String
})


export const userModel = model("users",userSchema)