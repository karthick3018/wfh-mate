import React,{useState} from 'react';
import { Checkbox } from 'antd';

const initialData = [{id:0,completed:false,todoText:''}];

const TodoElement = () => {
  const [todoValues,setTodoValues] = useState(()=>initialData);

  const handleKeyPress = (e) => {
    if(e.key==='Enter'){
      e.preventDefault()
      let newTodoElement = {id:todoValues.length,completed:false,todoText:''}
      setTodoValues([
        ...todoValues,
        newTodoElement
      ])
    }
  }

  const handleCheckBoxChange = (index) => {
    let updatedValue = [...todoValues];
    todoValues[index].completed = !todoValues[index].completed
    setTodoValues(updatedValue);
  }

  return (
    <div>
      {todoValues?.map((eachTodoItems,i)=>{
        return(
         <div key={eachTodoItems?.id}>
          <Checkbox onChange={()=>handleCheckBoxChange(i)} checked={eachTodoItems?.completed} />
          <div contentEditable="true" onKeyPress={handleKeyPress}/>
         </div>
        )
      })}
     
    </div>
  )
}

export default TodoElement;