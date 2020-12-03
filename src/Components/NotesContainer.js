import React from 'react';
import Note from './Note'

const NotesContainer = (props) => {

  const notes = props.notes

  return (
    <div>
      {
        notes.map(note => {
          <Note note={note} key={note.id}/>
        })
      }
    </div>
  );
}

export default NotesContainer;
