import express, { json } from "express";
import mongoose from "mongoose";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { userModel, contentModel, linkModel } from "./db.js";
import "dotenv/config";
import { userMiddlewear } from "./middlewear.js";
import { random } from "./utils.js";

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
app.post("/api/v1/content", userMiddlewear, async (req, res) => {
  const title = req.body.title;
  const link = req.body.link;
  const tags = req.body.tags;

  try {
    await contentModel.create({
      title,
      link,
      tags,
      //@ts-ignore
      //How to override types something concept
      userid: req.userid as mongoose.Types.ObjectId,
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
app.get("/api/v1/content", userMiddlewear, async (req, res) => {
  const response = await contentModel.find({
    //@ts-ignore
    userid: req.userid as mongoose.Types.ObjectId,
  });
  res.send({
    response,
  });
});
app.delete("/api/v1/content", userMiddlewear, async (req, res) => {
  const contentId = req.body.contentId;
  await contentModel.deleteOne({
    contentId,
    //@ts-ignore
    userid: req.userid,
  });
  res.send({
    message: "Deleted successfully",
  });
});

app.post("/api/v1/brain/share", userMiddlewear, async (req, res) => {
  const share = req.body.share;
  const hash = random(10);
  if (share) {
    try {
      await linkModel.create({
        //@ts-ignore
        userid: req.userid,
        hash: hash,
      });
    } catch (e) {
      const linkhash = await linkModel.findOne({
        //@ts-ignore
        userid: req.userid,
      });
      res.json({
        message: "Link",
        link: `/share/${linkhash?.hash}`,
      });
    }
  } else {
    await linkModel.deleteOne({
      //@ts-ignore
      userid: req.userid,
    });
    res.json({
      message: "Link deleted",
    });
  }
  res.json({
    message: "Updated sharable link",
    link: "/share/" + hash,
  });
});
app.get("/api/v1/brain/:sharelink", async (req, res) => {
  const hash = req.params.sharelink;
  const link = await linkModel.findOne({
    hash,
  });

  if (!link) {
    res.json({
      message: "Invalid link",
    });
    return;
  }

  if (!link.userid) {
    res.status(411).json({
      message: "Invalid link",
    });
    return;
  }

  const content = await contentModel.find({
    userid: link.userid,
  });

  res.json({
    content,
  });
});
app.listen(3000);
