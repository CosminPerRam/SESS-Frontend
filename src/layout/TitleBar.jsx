import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import {Title} from "../common/Title";


export const TitleBar = () => {
    return (
        <div className='TitleBar'>
            <Title title={'Servers'} />
            <FontAwesomeIcon icon={faXmark} style={{ fontSize: '12px' }} />
        </div>
    )
}