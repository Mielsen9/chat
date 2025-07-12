import * as s from './ChatView.module.scss'
import Avatar from "@/components/atoms/Avatar";
import DateMessage from "@/components/atoms/DateMassege";

// Type
interface Props {

}

// ChatView
const ChatView: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.ChatView}>
      <div className={s.ChatViewContainer}>
        <Avatar/>
        <div className={s.UserInfo}>
          <h2>User Name</h2>
          <p className={s.Message}>Message</p>
        </div>
        <div className={s.DateMessage}>
          <DateMessage/>
        </div>
      </div>
    </div>
  )
}

export default ChatView 