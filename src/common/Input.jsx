export const Input = ({title, style}) => {
    return (
        <div className='DropDown'>
            {title}
            <input type='search' className='Input' style={style}/>
        </div>
    )
}