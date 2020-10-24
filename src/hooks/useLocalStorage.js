import {useState,useEffect} from 'react';

const useLocalStorage = (key,value='',{serialize = JSON.stringify, deserialize = JSON.parse} = {}) => {
  const [state,setState] = useState(()=>{
    const existingValue = localStorage.getItem(key);
    if(existingValue){
      return deserialize(existingValue)
    }
    return typeof value === 'function'? value():value
  })

  useEffect(() => {
    localStorage.setItem(key,serialize(state))
  }, [state,key,serialize])

  return [{state,setState}]
}

export default useLocalStorage;