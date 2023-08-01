import {Label} from "./Label";
import {useState} from "react";

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

export const Checkbox = ({ title, formStyle, labelStyle }) => {
    const [checked, setChecked] = useState(false);
    
    return (
        <div className='form-element' style={formStyle} onClick={() => setChecked(!checked)}>
            <div className="checkmark">
                { checked ? <CheckMark/> : null }
            </div>
            
            <Label name={title} onClick={() => setChecked(!checked)} style={labelStyle}/>
        </div>
    )
}