export const Input = ({title, style}) => {
    return (
        <div className='drop-down'>
            {title}
            <input type='search' className='input' style={style}/>
        </div>
    )
}