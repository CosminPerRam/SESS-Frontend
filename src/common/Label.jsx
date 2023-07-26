export const Label = ({name}) => {
    return (
        <label className='label' id={name} for={name}>
            {name}
        </label>
    )
}