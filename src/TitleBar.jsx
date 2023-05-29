import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Title } from "./Title"
export const TitleBar = () => {
    return (
        <div class='TitleBar'>
            <Title title={'Servers'} />
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: '12px' }} />
        </div>
    )
}