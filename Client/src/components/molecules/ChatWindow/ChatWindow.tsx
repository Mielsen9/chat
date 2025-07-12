import * as s from './ChatWindow.module.scss'
import React from "react";
import Avatar from "@/components/atoms/Avatar";
import DateMessage from "@/components/atoms/DateMassege";

// Type
interface Props {
  messages: Message[];
}

// ChatWindow
const ChatWindow: React.FC<Props> = (props) => {
  const {messages} = props

  return (
    <div className={s.ChatWindow}>
      <div className={s.messageContainer}>
        <div className={s.messageBox}>
          <Avatar/>
          <p className={s.Message}>Message</p>
        </div>
        <div className={s.DateMessage}>
          <DateMessage/>
        </div>
      </div>
      <div className={s.OwnerMessageContainer}>
        <p className={s.OwnerMessage}>Message</p>
        <div className={s.DateMessage}>
          <DateMessage/>
        </div>
      </div>
      {messages.map((msg) => (
        <div key={msg._id} className={s.messageContainer}>
          <Avatar/>
          <p>{msg.sender}</p>
          <p>{msg.content}</p>
          <DateMessage/>
        </div>
      ))}
    </div>
  )
}

export default ChatWindow