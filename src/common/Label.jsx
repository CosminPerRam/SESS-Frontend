export const Label = ({name, style, onClick}) => {
    return (
        <label className='label' onClick={onClick} style={style}>
            {name}
        </label>
    )
}