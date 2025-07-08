import * as s from './MessageInput.module.scss'
import React from "react";

// Type
interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}

// MessageInput
const MessageInput: React.FC<Props> = (props) => {
  const {input, setInput, handleSend} = props

  return (
    <div className={s.MessageInput}>
      <input
        type="text"
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
        onKeyDown={(e) =>
          e.key === 'Enter' && handleSend()
        }
      />
    </div>
  )
}

export default MessageInput