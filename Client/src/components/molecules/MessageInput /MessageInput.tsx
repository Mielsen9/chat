import * as s from './MessageInput.module.scss'
import SendButton from "@/components/atoms/SendButton";
import TextField from "@/components/atoms/TextField";
import React from "react";

// Type
interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}

// TextField
const MessageInput: React.FC<Props> = (props) => {
  const {input, setInput, handleSend} = props

  return (
    <div className={s.MessageInput}>
      <TextField input={input} setInput={setInput} handleSend={handleSend }/>
      <SendButton handleSend={handleSend} />
    </div>
  )
}

export default MessageInput 