import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';
import {initSocket} from "./sockets /socketHandler";

dotenv.config();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Ініціалізація Socket.IO
initSocket(server);

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB error:", err));