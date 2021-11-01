import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const server = express();

server.use(express.json());

server.use('/api/user', userRoutes);


mongoose.connect(
    process.env.MONGODB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    },
    (err) => {
        if (err) {
            console.log("Err", err);
        } else {
            console.log("Connection Successful")
            server.listen(4000, () => console.log("Server started!"));
        }
    })