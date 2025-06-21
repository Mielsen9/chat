import express from 'express';
import cors from 'cors';
import chatRoutes from './routes/chatRoutes';
import messageRoutes from "./routes/messageRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chats", chatRoutes);
app.use('/api/messages', messageRoutes);

export default app;