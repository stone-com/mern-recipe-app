import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO_URI)
app.use(express.json());
app.use(cors());

app.listen(3001, () => console.log('Server started'));
