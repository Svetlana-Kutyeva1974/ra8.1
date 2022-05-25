import React from "react";
//import PropTypes from "prop-types";
import './Note.css';

const Note = ({note, onDelete }) => {
  console.log(' props в ноте',note);
  return (
    <div className="column">
      <div className="card">
        <div className="content">
          <div className="description">{note.note}</div>
        </div>
        <button
          className="attached"
          onClick={() => onDelete(note.id)}
        >
         &#10006;
        </button>
      </div>
    </div>
  );
};

/*
Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    note: PropTypes.string
  }),
  onDelete: PropTypes.func,
};
*/
export default Note;
