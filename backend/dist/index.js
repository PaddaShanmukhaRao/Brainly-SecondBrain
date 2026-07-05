import express, { json } from 'express';
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { userModel } from './db.js';
import 'dotenv/config';
const app = express();
app.use(json());
await mongoose.connect(process.env.MONGO_URI);
app.post('/api/v1/signup', async (req, res) => {
    //zod validation and hash the password using bycrypt
    const { username, password } = req.body;
    await userModel.create({
        username,
        password
    });
    res.json({
        "message": "User created"
    });
});
app.post('/api/v1/signin', (req, res) => {
});
app.post('/api/v1/content', (req, res) => {
});
app.get('/api/v1/content', (req, res) => {
});
app.delete('api/v1/content', (req, res) => {
});
app.post("api/v1/brain/share", (req, res) => {
});
app.get("api/v1/brain:sharelink", (req, res) => {
});
app.listen(3000);
//# sourceMappingURL=index.js.map