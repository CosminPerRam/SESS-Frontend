
export const Button = ({title, style, className, onClick}) => {
    return (
        <button className={`Button ${className}`} style={style} onClick={onClick}>
            {title}
        </button>
    )
}
