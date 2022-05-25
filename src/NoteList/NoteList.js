import PropTypes from 'prop-types'
import Note from '../Note/Note';
import './NoteList.css'

function NoteList({ items, onDelete }) {
  const noteLists = items.map((item) => (<Note className='clock' note= {item} key={item.id} onDelete={onDelete}/>));
  return (
    <div className='clock-list'>
      {noteLists}
    </div>
  )
}

NoteList.propTypes = {
  items: PropTypes.array,
  onDelete:  PropTypes.func,
}

export default NoteList;
