import * as s from './SendButton.module.scss'
import React from "react";

// Type
interface Props {
  handleSend: () => void
}

// SendButton
const SendButton: React.FC<Props> = (props) => {
  const {handleSend} = props

  return (
    <div className={s.SendButton}>
      <button onClick={handleSend}>Send</button>
    </div>
  )
}

export default SendButton