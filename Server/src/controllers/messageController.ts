import { Request, Response } from 'express';
import Message from '../models/Message';
import axios from 'axios';

export const getMessagesByChat = async (req: Request, res: Response) => {
  const { chatId } = req.params;

  try {
    const messages = await Message.find({ chatId }).sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching messages' });
  }
};

export const sendMessage = async (req: Request, res: Response) => {
  const { chatId } = req.params;
  const { content } = req.body;

  if (!content) {
    res.status(400).json({ message: 'Content is required' });
    return;
  }

  try {
    const userMessage = await Message.create({
      chatId,
      sender: 'user',
      content
    });

    res.status(201).json(userMessage);

    // ⏱️ Через 3 сек — надсилаємо цитату
    setTimeout(async () => {
      try {
        const quoteRes = await axios.get('https://api.quotable.io/random');
        const quote = quoteRes.data.content;

        await Message.create({
          chatId,
          sender: 'bot',
          content: quote
        });
      } catch (err) {
        console.error('Error fetching quote:', err);
      }
    }, 3000);

  } catch (err) {
    res.status(500).json({ message: 'Error sending message' });
  }
};