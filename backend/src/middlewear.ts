import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken"
import mongoose from "mongoose";
import { userModel } from "./db.js";

export const userMiddlewear =async(req:Request,res:Response,next:NextFunction)=>{
    const authToken = req.headers.authorization;
    
      const userid = jwt.verify(authToken as string,process.env.JWT_SECRET as string) as JwtPayload
      const response = await userModel.findOne({
        _id: userid.id as mongoose.Types.ObjectId,
      });
      if(response){
        //@ts-ignore
        req.userid = response.id
        next();
      }else{
        res.status(401).send({
            "message":"Unauthroized"
        })
      }
}