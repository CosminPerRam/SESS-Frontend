import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
export const TitleBar = () => {
    return (
        <div class='TitleBar'>
        <div>Servers</div>
        <FontAwesomeIcon icon={faXmark} style={{fontSize: '12px'}}/>
        </div>
    )
}