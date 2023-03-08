import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/db.js';

import { userRouter } from './routes/users.js';

const app = express();

connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/auth', userRouter);

app.listen(3001, () => console.log('Server started'));
