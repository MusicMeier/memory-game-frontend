import { Component } from 'react';
import NotesContainer from './NotesContainer'

const notesUrl = 'http://localhost:7001/notes'

class GamePageMemory extends Component {

  state = {
    notes: []
  }

  componentDidMount(){
    fetch(notesUrl)
      .then(response => response.json())
      .then(notes => {
        this.setState({notes: notes})
      })
  }
  
  render(){
    return (
      <div className='GamePageMemory'>
        <h1>I'm the Game Page!</h1>
        <NotesContainer notes={this.state.notes} />
      </div>
    );
  }
}

export default GamePageMemory;
