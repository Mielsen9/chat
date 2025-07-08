interface Message {
  _id: string;
  chatId: string;
  sender: 'user' | 'bot';
  content: string;
  timestamp: string;
  edited: boolean;
}