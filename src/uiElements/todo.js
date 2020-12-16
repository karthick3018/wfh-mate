import React from 'react';
import useLocalStorage  from '../hooks/useLocalStorage';
import { Checkbox } from 'antd';
import '../uiElements/uiStyles/todo.css';


const initialData = [{id:0,completed:false,todoText:''}];

const TodoElement = () => {
  const [{state:todoValues,setState:setTodoValues}] = useLocalStorage('todoList',initialData);

  const handleKeyPress = (e,index) => {
    if(e.key==='Enter' && !e.shiftKey &&todoValues.length<10){
      e.preventDefault()
      let newTodoElement = {id:todoValues.length,completed:false,todoText:''}
      setTodoValues([
        ...todoValues,
        newTodoElement
      ])
    }
    
    if(e.key === "Backspace" || e.key === "Delete"){
      let updatedValue = [...todoValues];
      if(!todoValues[index].todoText && updatedValue.length>1){
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
    <div className="todo-wrapper">
      {todoValues?.map((eachTodoItems,i)=>{
        return(
         <div className="todo-elements" key={eachTodoItems?.id}>
          <Checkbox className="todo-checkbox" onChange={()=>handleCheckBoxChange(i)} checked={eachTodoItems?.completed} />
          <input className="todo-input" onKeyDown={(e)=>handleKeyPress(e,i)} onChange={(e)=>handleTextChange(e,i)} value={eachTodoItems?.todoText}/>
         </div>
        )
      })}
     
    </div>
  )
}

export default TodoElement;