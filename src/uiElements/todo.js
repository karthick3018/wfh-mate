import React from 'react';
import useLocalStorage  from '../hooks/useLocalStorage';
import { Checkbox } from 'antd';


const initialData = [{id:0,completed:false,todoText:''}];

const TodoElement = () => {
  const [{state:todoValues,setState:setTodoValues}] = useLocalStorage('todoList',initialData);

  const handleKeyPress = (e,index) => {
    if(e.key==='Enter' && !e.shiftKey){
      e.preventDefault()
      let newTodoElement = {id:todoValues.length,completed:false,todoText:''}
      setTodoValues([
        ...todoValues,
        newTodoElement
      ])
    }
    
    if(e.key === "Backspace" || e.key === "Delete"){
      let updatedValue = [...todoValues];
      if(!todoValues[index].todoText){
        updatedValue.splice(index,1)
        setTodoValues(updatedValue)
      }
       
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
          <input onKeyDown={(e)=>handleKeyPress(e,i)} onChange={(e)=>handleTextChange(e,i)} value={eachTodoItems?.todoText}/>
         </div>
        )
      })}
     
    </div>
  )
}

export default TodoElement;