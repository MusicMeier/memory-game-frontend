import React from 'react';
import Note from './Note'

const NotesContainer = (props) => {
  const { notes, stack, matched, setStack, setMatched } = props


  return (
    <div className="notes-container">
      {notes
        .map(note => {
          return <Note 
            note={note} 
            notes={notes}
            key={note.id} 
            stack={stack}
            matched={matched}
            setStack={setStack}
            setMatched={setMatched}
          />
        })
      }
    </div>
  );
}

export default NotesContainer;
