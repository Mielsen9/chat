import * as s from './ChatWindow.module.scss'
import React from "react";

// Type
interface Props {
  messages: Message[];
}

// ChatWindow
const ChatWindow: React.FC<Props> = (props) => {
  const {messages} = props

  return (
    <div className={s.ChatWindow}>
      {messages.map((msg) => (
        <div key={msg._id} className={s.message}>
          <b>{msg.sender}:</b> {msg.content}
        </div>
      ))}
    </div>
  )
}

export default ChatWindow