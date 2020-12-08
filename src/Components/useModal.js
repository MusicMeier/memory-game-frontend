import React from 'react';
import { useState } from 'react'
import Modal from './Modal'
import Note from './Note'

const useModal = () => {
  const [isShowing, setIsShowing ] = useState(false);

  function toggle() {
    setIsShowing(!isShowing)
  }

  return (
    <div>
      <Note 
        isShowing={isShowing}
        setIsShowing={setIsShowing}
      />
      <Modal 
        isShowing={isShowing}
        setIsShowing={setIsShowing}
        toggle={toggle}
      />
    </div>
  );
}

export default useModal;
