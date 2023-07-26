import {Label} from "./Label";
import {useState} from "react";

export const Checkbox = ({ title, style }) => {
    
    const [checked, setChecked] = useState(false);
    
    return (
        <div className='form-element' style={style} >
            <div className="checkmark" onClick={() => setChecked(!checked)}>
                {
                    checked ?
                <div style={{
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
                        :
                        null
                }
            </div>
            
            <Label name={title} onClick={() => setChecked(!checked)}/>
        </div>
    )
}