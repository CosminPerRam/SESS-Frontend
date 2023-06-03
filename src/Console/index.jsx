import './style.scss'
import Draggable from "react-draggable";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Console = () => {
  return (
    <Draggable
      handle=".ConsoleHeader"
      defaultPosition={{x: 240, y: 160}}
      >
      <div className={'ConsoleContainer'}>
        <div className={'ConsoleHeader'}>
          <span className={'ConsoleHeaderTitle'}>
            Console
          </span>
          <FontAwesomeIcon icon={faXmark} className={'ConsoleHeaderX'} />
        </div>
      </div>
    </Draggable>
  )
}
