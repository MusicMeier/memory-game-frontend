import { useState, useEffect } from 'react';
import NotesContainer from './NotesContainer'

const notesUrl = 'http://localhost:7001/notes'

function GamePageMemory() {

  const [ notes, setNotes ] = useState([])
  const [ stack, setStack ] = useState([])
  const [ matched, setMatched ] = useState([])

  useEffect(() => {
    fetch(notesUrl)
      .then(response => response.json())
      .then((notes) => setNotes(
        notes.sort(() => Math.random() - 0.5)
      ))
  }, [])

    return (
      <div className='GamePageMemory'>
        <h1>I'm the Game Page!</h1>
        <NotesContainer 
          notes={notes}
          stack={stack}  
          setStack={setStack}  
          matched={matched}
          setMatched={setMatched}
        />
      </div>
    );
}

export default GamePageMemory;
