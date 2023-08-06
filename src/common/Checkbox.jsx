import {Label} from "./Label";
import {useState} from "react";

const CheckMark = ({disabled}) => {
  return <div style={{
    content: '',
    display: 'block',
    position: 'relative',

    top: '1px',
    left: '2px',
    width: '5px',
    height: '6px',

    border: disabled ? 'solid #847A68' : 'solid white', //$textDark
    borderWidth: '0 3px 2px 0',

    transform: 'rotate(45deg)'
  }} className={'checkmark_drawing'} />
}

export const Checkbox = ({ title, formStyle, labelStyle, checked = false, disabled = false, onChanged }) => {
    return (
        <div className='form-element' style={formStyle} onMouseDown={onChanged}>
            <div className="checkmark">
                { checked ? <CheckMark disabled={disabled}/> : null }
            </div>
            
            <Label name={title} onMouseDown={onChanged} style={{...labelStyle, ...(disabled ? {color: '#847A68'} : {})}}/>
        </div>
    )
}