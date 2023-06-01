export const Checkbox = ({ title, style }) => {
    return (
        <div class='DropDown' style={style}>
            <input type='checkbox' class='Checkbox' />
            {title}
        </div>
    )
}