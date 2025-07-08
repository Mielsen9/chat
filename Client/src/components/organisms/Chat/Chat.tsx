import React from "react";
import * as s from './Chat.module.scss'
import useChat from "@/features/Chat";
import SendButton from "@/components/atoms/SendButton";
import MessageInput from "@/components/atoms/MessageInput";

// Type
interface Props {
  chatId: string
}

// Chat
const Chat: React.FC<Props> = (props) => {
  const {chatId} = props

  const { messages, input, setInput, handleSend } = useChat(chatId);

  return (
    <div className={s.Chat}>
      <div className={s.messageContainer}>
        {messages.map((msg) => (
          <div key={msg._id} className={s.message}>
            <b>{msg.sender}:</b> {msg.content}
          </div>
        ))}
      </div>

      <MessageInput input={input} setInput={setInput} handleSend={handleSend }/>
      <SendButton handleSend={handleSend} />
    </div>
  )
}

export default Chat