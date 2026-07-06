import express, { json } from "express";
import mongoose from "mongoose";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { userModel, contentModel } from "./db.js";
import "dotenv/config";

const app = express();
app.use(json());
await mongoose.connect(process.env.MONGO_URI as string);
app.post("/api/v1/signup", async (req, res) => {
  //zod validation and hash the password using bycrypt
  const { username, password } = req.body;
  try {
    await userModel.create({
      username,
      password,
    });
    res.json({
      message: "User created",
    });
  } catch (e) {
    res.status(411).send({
      message: "User already exists!",
      error: e,
    });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const { username, password } = req.body;
  const response = await userModel.findOne({
    username,
    password,
  });
  if (response) {
    const token = jwt.sign(
      {
        id: response._id,
      },
      process.env.JWT_SECRET as string,
    );
    res.send({
      token,
    });
  } else {
    res.status(411).send({
      message: "Please Sign in User don't exist",
    });
  }
});
app.post("/api/v1/content", async (req, res) => {
  const title = req.body.title;
  const link = req.body?.link;
  const tags = req.body?.tags;
  const authToken = req.headers.authorization;

  const userid = jwt.decode(authToken as string) as JwtPayload;
  console.log(userid);
  console.log(userid.id as mongoose.Types.ObjectId);
  const response = await userModel.findOne({
    _id: userid.id as mongoose.Types.ObjectId,
  });
  console.log(response);

  try {
    await contentModel.create({
      title,
      link,
      tags,
      userid: userid.id as mongoose.Types.ObjectId,
    });
    res.send({
      message: "Added the content",
    });
  } catch (e) {
    res.status(411).send({
      message: "Unable to add conent",
    });
  }
});
app.get("/api/v1/content", async (req, res) => {
  const authToken = req.headers.authorization;

  const userid = jwt.decode(authToken as string) as JwtPayload;
  console.log(userid);

  const response = await contentModel.find({
    userid: userid.id as mongoose.Types.ObjectId,
  });
  console.log(response);
  res.send({
    "Message":response
  })
});
app.delete("api/v1/content", (req, res) => {
    
});
app.post("api/v1/brain/share", (req, res) => {});
app.get("api/v1/brain:sharelink", (req, res) => {});
app.listen(3000);
