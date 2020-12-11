import { useState, useEffect } from 'react';
import NotesContainer from './NotesContainer'
import Modal from "./Modal";
import useModal from './useModal';

const notesUrl = 'http://localhost:7001/notes'

function GamePageMemory() {

  const [ notes, setNotes ] = useState([])
  const [ stack, setStack ] = useState([])
  const [ matched, setMatched ] = useState([])

  const [isShowing, setIsShowing ] = useState(false);

  useEffect(() => {
    fetch(notesUrl)
      .then(response => response.json())
      .then((notes) => setNotes(
        notes.sort(() => Math.random() - 0.5)
      ))
  }, [])

    return (
      <>
      <div className='GamePageMemory'>
        <h1 className="title-gamepage">Note-Set-Match</h1>
        <p className="score"><strong>Score: {matched.length / 2 * 100}</strong></p>
        <NotesContainer 
          className="notes-container"
          notes={notes}
          stack={stack}  
          setStack={setStack}  
          matched={matched}
          setMatched={setMatched}
          isShowing={isShowing}
          setIsShowing={setIsShowing}
        />
      </div>
      <div className="App">
        <Modal
          isShowing={isShowing}
          setIsShowing={setIsShowing}
        />
      </div>
    </>
    );
}

export default GamePageMemory;
