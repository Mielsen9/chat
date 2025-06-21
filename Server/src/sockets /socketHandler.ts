import { Server, Socket } from 'socket.io';
import Message from '../models/Message';
import axios from 'axios';

let io: Server;

export const initSocket = (server: any) => {
  io = new Server(server, {
    cors: {
      origin: '*', // обмежити під свій фронтенд на проді
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket: Socket) => {
    console.log('New client connected', socket.id);

    // Приєднання до кімнати чату
    socket.on('join_chat', (chatId: string) => {
      socket.join(chatId);
      console.log(`Socket ${socket.id} joined chat ${chatId}`);
    });

    // Обробка надсилання повідомлення
    socket.on('send_message', async (data: { chatId: string; content: string }) => {
      try {
        const userMessage = await Message.create({
          chatId: data.chatId,
          sender: 'user',
          content: data.content
        });

        // Відправляємо повідомлення всім в кімнаті
        io.to(data.chatId).emit('new_message', userMessage);

        // Через 3 сек – auto response
        setTimeout(async () => {
          try {
            const quoteRes = await axios.get('https://api.quotable.io/random');
            const quote = quoteRes.data.content;

            const botMessage = await Message.create({
              chatId: data.chatId,
              sender: 'bot',
              content: quote
            });

            io.to(data.chatId).emit('new_message', botMessage);

          } catch (err) {
            console.error('Error fetching quote:', err);
          }
        }, 3000);

      } catch (err) {
        console.error('Error sending message:', err);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected', socket.id);
    });
  });
};

export const getIO = (): Server => {
  if (!io) {
    throw new Error('Socket.io not initialized');
  }
  return io;
};