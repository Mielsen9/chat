import * as s from './ChatHeader.module.scss'
import Avatar from "@/components/atoms/Avatar/index"

// Type
interface Props {

}

// ChatHeader
const ChatHeader: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.ChatHeader}>
      <div className={s.ChatHeaderContainer}>
        <div className={s.Avatar}>
          <Avatar/>
        </div>
        <div className={s.Name}>
          <h3>Zvir Petro</h3>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader