import React from 'react';
import { Link } from 'react-router-dom'
// import {Route, Switch} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>I am the Homepage</h1>
      <Link to="/GamePageMemory">
        <button>Start Game</button>
      </Link>
    </div>
  );
}

export default HomePage;
