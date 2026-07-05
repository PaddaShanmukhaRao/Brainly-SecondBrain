import mongoose, {model, Schema} from "mongoose";

const userSchema = new Schema({
    "username":{type:String,require:true},
    "password":String
})

export const userModel =  model("Users",userSchema);