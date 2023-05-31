export const DropDown = ({label, options, style}) => {
    return (
        <label class='DropDown'>
            {label}
            <select style={style}>
                {options.map(option => <option value={`'${option}'`}>{option}</option>)}
                
            </select>
            <div class='select-selected'></div>
        </label>
    )
}