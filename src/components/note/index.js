import React from 'react';
import TextArea from '../../uiElements/textArea';
import TodoElement from '../../uiElements/todo';
import mate from '../icons/mate.png';
import './notes.css';

const Note = () => {
  return (
    <div className="notes-wrapper">
      <div className="notify-text">
        <p>Don't test your memory skills in the list of work to do!! Make a note</p>
      </div>
      <TextArea 
       
      />
      <TodoElement/>
      <div className="mate-image-wrapper">
        <figure className="mate-figure">
          <img className="mate-img" src={mate} alt="mate" />
        </figure>
      </div>
    </div>
  )
}


export default Note;