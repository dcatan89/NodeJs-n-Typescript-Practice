import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes';

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
const Port = process.env.PORT || 5000;
app.listen(Port, () => {
    console.log(`Server running on port ${PORT}`)
})