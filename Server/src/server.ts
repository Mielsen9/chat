import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Server as SocketIOServer } from 'socket.io';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

const io = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB error:", err));