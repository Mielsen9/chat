import * as s from './LogButton.module.scss'
// Type
interface Props {

}
// LogButton
const LogButton: React.FC<Props> = (props) => {
    const {} = props
    
    return (
        <div className={s.LogButton}>
          <div className={s.LogButtonContainer}>
              <p>Log In</p>
          </div>
        </div>
    )
}

export default LogButton