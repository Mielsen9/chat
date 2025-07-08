import React from "react";
import * as s from './Chat.module.scss'
import useChat from "@/features/Chat";
import MessageInput from "@/components/molecules/MessageInput ";

// Type
interface Props {
  chatId: string
}

// Chat
const Chat: React.FC<Props> = (props) => {
  const {chatId} = props

  const { messages, input, setInput, handleSend } = useChat(chatId);
  // Return
  return (
    <div className={s.Chat}>
      <div className={s.messageContainer}>
        {messages.map((msg) => (
          <div key={msg._id} className={s.message}>
            <b>{msg.sender}:</b> {msg.content}
          </div>
        ))}
      </div>

      <MessageInput input={input} setInput={setInput} handleSend={handleSend}/>
    </div>
  )
}

export default Chat