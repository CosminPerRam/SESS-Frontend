export const Checkbox = ({ title, style }) => {
    return (
        <div className='drop-down' style={style}>
            <input type='checkbox' className='checkbox' />
            {title}
        </div>
    )
}