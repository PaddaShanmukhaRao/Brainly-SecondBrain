import express, { json } from 'express';
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import {userModel} from './db.js';

const app = express();
app.use(json())
app.post('/api/v1/signup',async(req,res)=>{
    const {username,password} = req.body
    const user = new userModel({
        username,
        password
    })
    await user.save();
    
})
app.post('/api/v1/signin',(req,res)=>{
    
})
app.post('/api/v1/content',(req,res)=>{
    
})
app.get('/api/v1/content',(req,res)=>{
    
})
app.delete('api/v1/content',(req,res)=>{

})
app.post("api/v1/brain/share",(req,res)=>{

})
app.get("api/v1/brain:sharelink",(req,res)=>{

})
app.listen(3000);