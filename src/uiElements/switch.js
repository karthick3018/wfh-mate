import React,{useState,useEffect} from 'react';
import { Switch } from 'antd';
import './uiStyles/switch.css';

const Toggle = ({children,handleSwitchChange,checked}) => {
  const [on,setOn] = useState(false);

  useEffect(() => {
     if(checked){
      setOn(true);
     }
  }, [checked])

  const onChange = (value) => {
    handleSwitchChange(value);
    setOn(!on)
  }

  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, onChange})
  })

}

const ToggleOn = ({on,children}) => (children)
const ToggleButton = ({on,onChange}) => (<Switch checked={on} onChange={onChange}/>)

const SwitchElement = ({label='Switch',handleSwitchChange,checked}) => {
  return (
    <div className="switch-class">
      <Toggle handleSwitchChange={handleSwitchChange} checked={checked}>
        <ToggleOn><div>{label}</div></ToggleOn>
        <ToggleButton/>
       </Toggle>
    </div>
  )
}

export default SwitchElement;