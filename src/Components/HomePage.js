import React from 'react';
import GamePageMemory from './GamePageMemory'
import GamePageRecordings from './GamePageRecordings'

const HomePage = () => {
  return (
    <div>
      <GamePageMemory />
      <GamePageRecordings />
    </div>
  );
}

export default HomePage;
