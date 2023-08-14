export const CheckMark = ({disabled}) => {
    return <div className={disabled ? "disabled-checkmark" : "checkmark"} />
}