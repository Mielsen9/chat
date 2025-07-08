import {useState} from 'react';
import { useSocket } from '@/hook/useSocket';
// useChat
export const useChat = (chatId: string) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const { sendMessage } = useSocket(chatId, (newMessage) => {
    setMessages((prev) => [...prev, newMessage]);
  });

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input.trim());
      setInput('');
    }
  };
  return  {
    messages,
    input,
    setInput,
    handleSend,
  };
};