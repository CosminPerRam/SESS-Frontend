export const CheckMark = ({disabled}) => {
    return disabled ? <div className="disabled-checkmark" /> : <div className="checkmark" />
}