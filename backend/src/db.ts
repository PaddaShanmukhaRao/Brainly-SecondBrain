import {Model, Schema} from "mongoose";

const userSchema = new Schema({
    "username":{type:String,require:true},
    "password":String
})

export const userModel = new Model(userSchema,"USER");