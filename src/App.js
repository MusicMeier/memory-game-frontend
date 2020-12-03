import React, { Component } from 'react'
import './App.css';
import HomePage from './Components/HomePage'

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>I'm the App!</h1>
        <HomePage />
      </div>
    );
  }
}

export default App;
