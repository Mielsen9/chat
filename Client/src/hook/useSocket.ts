import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export const useSocket = (
  chatId: string,
  onNewMessage: (message: Message) => void
) => {
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = io('http://localhost:5000'); // заміни на свій бекенд

    socket.current.emit('join_chat', chatId);

    socket.current.on('new_message', (message: Message) => {
      if (message.chatId === chatId) {
        onNewMessage(message);
      }
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [chatId, onNewMessage]);

  const sendMessage = (content: string) => {
    socket.current?.emit('send_message', { chatId, content });
  };

  return { sendMessage };
};