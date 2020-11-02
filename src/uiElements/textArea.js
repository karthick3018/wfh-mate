import React,{useState} from 'react';

const TextArea = () => {
  const [textArea,setTextArea] = useState('');
  const handleTextAreaChange = (e) => {
    setTextArea(e.target.value)
  }

  return (
    <div>
      <textarea 
       onChange={handleTextAreaChange}
       value={textArea}
      />
    </div>
  )
}

export default TextArea;