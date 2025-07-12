import React, {FC} from "react";
import * as s from './Main.module.scss'
import Chat from "@/components/organisms/Chat";
import LogButton from "@/components/atoms/LogButton";
import SearchInput from "@/components/atoms/SearchInput";
import Avatar from "@/components/atoms/Avatar";
import ChatView from "@/components/molecules/ChatView ";


// Type
interface Props {

}

// Main
const Main: FC<Props> = (props) => {
  const {} = props

  return (
    <div className={`${s.Main} ${s.wrapper}`}>
      <div className={s.MainContainer}>
        <div className={s.SideBar}>
          <div className={s.AvatarAndLogButton}>
            <Avatar/>
            <LogButton/>
          </div>
          <div className={s.SearchInput}>
            <SearchInput/>
          </div>
          <div className={s.Chats}>
            <h2>Chats</h2>
            <ChatView/>
            <ChatView/>
            <ChatView/>
            <ChatView/>
          </div>
        </div>
        <div className={s.Chat}>
          <Chat chatId={"1"}/>
        </div>
      </div>
    </div>
  )
}

export default Main;