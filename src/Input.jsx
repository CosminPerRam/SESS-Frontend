export const Input = ({title, style}) => {
    return (
        <div class='DropDown'>
            {title}
            <input type='search' class='Input' style={style}/>
        </div>
    )
}