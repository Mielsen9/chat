import * as s from './Avatar.module.scss'

// Type
interface Props {

}

// Avatar
const Avatar: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.Avatar}>
      Avatar
    </div>
  )
}

export default Avatar