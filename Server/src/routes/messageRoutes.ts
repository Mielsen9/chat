import express from 'express';
import {
  getMessagesByChat,
  sendMessage
} from '../controllers/messageController';

const router = express.Router();

router.get('/:chatId', getMessagesByChat);
router.post('/:chatId', sendMessage);

export default router;