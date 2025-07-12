import * as s from './SearchInput.module.scss'

// Type
interface Props {

}

// SearchInput
const SearchInput: React.FC<Props> = (props) => {
  const {} = props

  return (
    <div className={s.SearchInput}>
      <input className={s.input}
             type="text"
             // onChange={(e) => setSearchQuery(e.target.value)}
             placeholder="Search Chat"
      />
    </div>
  )
}

export default SearchInput