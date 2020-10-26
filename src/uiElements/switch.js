import React,{useState} from 'react';
import { Switch } from 'antd';

const Toggle = ({children}) => {
  const [on,setOn] = useState(false);

  const onChange = (value) => {
    setOn(!on);
  }

  return React.Children.map(children, child => {
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {on, onChange})
  })

}

const ToggleOn = ({on,children}) => (children)
const ToggleButton = ({on,onChange}) => (<Switch checked={on} onChange={onChange}/>)

const SwitchElement = ({label='Switch'}) => {
  return (
    <div>
      <Toggle>
        <ToggleOn>{label}</ToggleOn>
        <ToggleButton/>
       </Toggle>
    </div>
  )
}

export default SwitchElement;