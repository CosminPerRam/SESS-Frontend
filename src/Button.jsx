
export const Button = ({title, style, className}) => {
    return (
        <button className={`Button ${className}`} style={style}>
            {title}
        </button>
    )
}
