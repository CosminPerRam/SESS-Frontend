export const Checkbox = ({ title, style }) => {
    return (
        <div className='form-element' style={style}>
            <input type='checkbox' className='checkbox' />
            {title}
        </div>
    )
}