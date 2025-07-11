import * as s from './ChatHeader.module.scss'

// Type
interface Props {

}

// ChatHeader
const ChatHeader: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.ChatHeader}>
      <div className={s.ChatHeaderContainer}>
        <div >

        </div>
        <div >
          <h3>Zvir Petro</h3>
        </div>
      </div>
    </div>
  )
}

export default ChatHeader