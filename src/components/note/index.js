import React from 'react';
import TextArea from '../../uiElements/textArea';
import TodoElement from '../../uiElements/todo';
import mate from '../illustrations/mate.png';
import './notes.css';

const Note = () => {
  return (
    <div className="notes-wrapper">
      <div className="notify-text">
        <p className="sticky-note-wrap sticky-note-blue sticky-note-wrap-text">Check how long u're working! Start,End Work button helps u to manage...</p>
        <p className="sticky-note-wrap sticky-note-blue sticky-note-wrap-text">Don't test your memory skills in the list of work to do!! Have a todo list...</p>
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