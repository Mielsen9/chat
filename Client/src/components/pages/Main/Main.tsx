import React, {FC} from "react";
import * as s from './Main.module.scss'
import Chat from "@/components/molecules/Chat";


// Type
interface Props {

}

// Main
const Main: FC<Props> = (props) => {
  const {} = props

  return (
    <div className={`${s.Main} ${s.wrapper}`}>
      <Chat chatId={"1"}/>
    </div>
  )
}

export default Main;