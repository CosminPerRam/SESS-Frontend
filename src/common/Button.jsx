
export const Button = ({title, style, className, onClick}) => {
    return (
        <button className={`button ${className}`} style={style} onClick={onClick}>
            {title}
        </button>
    )
}
