import { Schema,model } from "mongoose";

const userSchema = new Schema({
    username:String,
    surname:String,
    age:Number,
    telephone:Number,
    email:String,
    password:String,
    photo:String
},{
    versionKey:false,
    timestamps:true
})


export const userModel = model("users",userSchema)