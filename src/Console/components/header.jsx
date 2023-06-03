import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export const Header = ({onCloseClick}) => {
  return (
    <div className={'ConsoleHeader'}>
              <span className={'ConsoleHeaderTitle'}>
                Console
              </span>
      <FontAwesomeIcon icon={faXmark} className={'ConsoleHeaderX'} onClick={onCloseClick}/>
    </div>
  )
}
