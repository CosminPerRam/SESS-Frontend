export const DropDown = ({label, options}) => {
    return (
        <label class='DropDown'>
            {label}
            <select>
                {options.map(option => <option value={`'${option}'`}>{option}</option>)}
                
            </select>
            <div class='select-selected'></div>
        </label>
    )
}