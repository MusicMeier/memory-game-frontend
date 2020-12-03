import React from 'react';
import Note from './Note'

const NotesContainer = (props) => {

  const notes = props.notes

  return (
    <div className="notes-container">
      {notes
        .sort(() => Math.random() - 0.5)
        .map(note => {
          return <Note note={note} key={note.id}/>
        })
      }
    </div>
  );
}

export default NotesContainer;
