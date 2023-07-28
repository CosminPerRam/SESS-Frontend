import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

export const Header = ({onCloseClick, title}) => {
  return (
    <div className='console-header'>
              <span className={'console-header-title'}>
                {title}
              </span>
      <FontAwesomeIcon icon={faXmark} className='console-header-x' onClick={onCloseClick}/>
    </div>
  )
}
