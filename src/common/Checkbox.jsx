import {Label} from "./Label";

export const Checkbox = ({ title, style }) => {
    return (
        <div className='form-element' style={style}>
            <input type='checkbox' className='checkbox' id={title} name={title} value={title} />
            <div className="checkmark"></div>
            <Label name={title}/>
        </div>
    )
}