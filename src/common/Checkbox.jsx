import {Label} from "./Label";

export const Checkbox = ({ title, style }) => {
    return (
        <div className='form-element' style={style}>
            <div className="checkmark"></div>
            <input type='checkbox' className='checkbox' />
            <Label text={title} />
        </div>
    )
}