import {Label} from "./Label";
import {useEffect, useState} from "react";

const CheckMark = () => {
  return <div style={{
    content: '',
    display: 'block',
    position: 'relative',

    top: '1px',
    left: '2px',
    width: '5px',
    height: '6px',

    border: 'solid white',
    borderWidth: '0 3px 2px 0',

    MsTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)'
  }} />
}

export const Checkbox = ({ title, formStyle, labelStyle, checked = false, disabled = false, onChanged }) => {
    const [check, setCheck] = useState(checked);

    useEffect(() => {
      onChanged && onChanged(check);
    }, [check]);

    const changed = () => {
      if(!disabled) {
        setCheck(!check);
      }
    }
    
    return (
        <div className='form-element' style={formStyle} onClick={changed}>
            <div className="checkmark">
                { check ? <CheckMark/> : null }
            </div>
            
            <Label name={title} onClick={changed} style={labelStyle}/>
        </div>
    )
}