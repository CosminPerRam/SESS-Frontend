export const Checkbox = ({ title, style }) => {
    return (
        <div className='DropDown' style={style}>
            <input type='checkbox' className='Checkbox' />
            {title}
        </div>
    )
}