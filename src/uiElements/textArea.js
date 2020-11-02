import React from 'react';
import useLocalStorage  from '../hooks/useLocalStorage';

const TextArea = () => {
  const [{state,setState}] = useLocalStorage('textAreaContent','');

  const handleTextAreaChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div>
      <textarea 
       onChange={handleTextAreaChange}
       value={state}
      />
    </div>
  )
}

export default TextArea;