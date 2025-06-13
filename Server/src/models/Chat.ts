import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Chat', ChatSchema);