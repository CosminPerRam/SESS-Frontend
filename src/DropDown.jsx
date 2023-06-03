export const DropDown = ({label, options, style}) => {
    return (
        <label className='DropDown'>
            {label}
            <select style={style}>
                {options.map(option => <option value={option} key={option}>{option}</option>)}
            </select>
            <div className='select-selected'></div>
        </label>
    )
}