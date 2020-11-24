import React from 'react';
import useLocalStorage  from '../hooks/useLocalStorage';
import './uiStyles/textarea.css';

const TextArea = () => {
  const [{state,setState}] = useLocalStorage('textAreaContent','');

  const handleTextAreaChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div className="textBox-wrapper">
      <textarea 
       placeholder="Note the important ones here..."
       onChange={handleTextAreaChange}
       value={state}
      />
    </div>
  )
}

export default TextArea;