export const Label = ({name, onClick}) => {
    return (
        <label className='label' onClick={onClick}>
            {name}
        </label>
    )
}