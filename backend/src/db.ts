import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, require: true, unique: true },
  password: String,
});

export const userModel = model("Users", userSchema);

const contentSchema = new Schema({
  title: { type: String, require: true },
  link: { type: String },
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tags"}],
  userid: { type: mongoose.Types.ObjectId, ref: "Users", require: true },
});

export const contentModel = model("Content", contentSchema);
