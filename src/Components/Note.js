import React from 'react';

const Note = (props) => {

  const note = props.note
  return (
    <div className="note-card">
      <img 
        className="note-image image-blank" 
        src={note.image} 
        alt={note.name} />
    </div>
  );
}

export default Note;
