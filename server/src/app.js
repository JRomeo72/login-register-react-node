import express from 'express';
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api', userRouter);
app.use('/api', authRouter);

export default app