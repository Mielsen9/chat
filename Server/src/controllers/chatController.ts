import { Request, Response } from 'express';
import Chat from '../models/Chat';

export const getChats = async (_req: Request, res: Response) => {
  try {
    const chats = await Chat.find().sort({ createdAt: -1 });
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching chats' });
  }
};

export const createChat = async (req: Request, res: Response) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res.status(400).json({ message: 'First and last name are required' });
    return;
  }

  try {
    const newChat = await Chat.create({ firstName, lastName });
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: 'Error creating chat' });
  }
};

export const updateChat = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    res.status(400).json({ message: 'First and last name are required' });
    return
  }

  try {
    const updatedChat = await Chat.findByIdAndUpdate(
      id,
      { firstName, lastName },
      { new: true }
    );

    if (!updatedChat) {
      res.status(404).json({ message: 'Chat not found' });
      return
    }

    res.status(200).json(updatedChat);
  } catch (error) {
    res.status(500).json({ message: 'Error updating chat' });
  }
};

export const deleteChat = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deleted = await Chat.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ message: 'Chat not found' });
      return
    }

    res.status(200).json({ message: 'Chat deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting chat' });
  }
};