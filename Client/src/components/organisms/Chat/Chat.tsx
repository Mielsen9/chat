import React from "react";
import * as s from './Chat.module.scss'
import useChat from "@/features/Chat";
import MessageInput from "@/components/molecules/MessageInput ";
import ChatWindow from "@/components/molecules/ChatWindow";
import ChatHeader from "@/components/molecules/ChatHeader";

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
      <ChatHeader/>

      <ChatWindow messages={messages}/>
      <div className={s.MessageInput}>
        <MessageInput input={input} setInput={setInput} handleSend={handleSend}/>
      </div>
    </div>
  )
}

export default Chat