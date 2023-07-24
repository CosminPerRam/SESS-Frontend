export const Input = ({title, style}) => {
    return (
        <div className='form-element'>
            {title}
            <input type='search' className='input' style={style}/>
        </div>
    )
}