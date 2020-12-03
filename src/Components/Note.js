import React from 'react';

const Note = (props) => {

  const note = props.note
  return (
    <div>
      <img src={note.image} alt={note.name} />
    </div>
  );
}

export default Note;
