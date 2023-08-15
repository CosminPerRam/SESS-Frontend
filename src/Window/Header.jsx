import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const Header = ({ onCloseClick, title }) => {
  return (
    <div className='window-header'>
      <span className={"window-header-title"}>{title}</span>
      <FontAwesomeIcon
        icon={faXmark}
        className='window-header-x'
        onClick={onCloseClick}
      />
    </div>
  );
};
