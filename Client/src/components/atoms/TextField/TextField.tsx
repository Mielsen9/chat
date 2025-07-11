import * as s from './TextField.module.scss'
import React from "react";

// Type
interface Props {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSend: () => void;
}

// TextField
const TextField: React.FC<Props> = (props) => {
  const {input, setInput, handleSend} = props

  return (
    <div className={s.TextField}>
      <input
        type="text"
        value={input}
        placeholder="Напишіть повідомлення..."
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

export default TextField