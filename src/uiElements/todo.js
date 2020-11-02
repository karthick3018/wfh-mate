import React from 'react';
import useLocalStorage  from '../hooks/useLocalStorage';
import { Checkbox } from 'antd';


const initialData = [{id:0,completed:false,todoText:''}];

const TodoElement = () => {
  const [{state:todoValues,setState:setTodoValues}] = useLocalStorage('todoList',initialData);

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
  const handleTextChange = (e,index) => {
    let updatedValue = [...todoValues];
    todoValues[index].todoText = e.target.value
    setTodoValues(updatedValue);
  }

  return (
    <div>
      {todoValues?.map((eachTodoItems,i)=>{
        return(
         <div key={eachTodoItems?.id}>
          <Checkbox onChange={()=>handleCheckBoxChange(i)} checked={eachTodoItems?.completed} />
          <input onKeyPress={handleKeyPress} onChange={(e)=>handleTextChange(e,i)} value={eachTodoItems?.todoText}/>
         </div>
        )
      })}
     
    </div>
  )
}

export default TodoElement;