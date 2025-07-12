import * as s from './DateMassege.module.scss'

// Type
interface Props {

}

// DateMessage
const DateMessage: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.DateMassege}>
      <p className={s.Date}>Aug 17, 2025</p>
    </div>
  )
}

export default DateMessage