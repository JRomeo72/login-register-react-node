import express from 'express';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js'
import taskRouter from './routes/tasks.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/api', userRouter);
app.use('/api', authRouter);
app.use('/api', taskRouter);

export default app