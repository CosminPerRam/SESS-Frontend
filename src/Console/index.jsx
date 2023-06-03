import './style.scss'
import Draggable from "react-draggable";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "../Button";

export const Console = () => {
  return (
    <Draggable
      handle=".ConsoleHeader"
      defaultPosition={{x: 320, y: 110}}
      >
      <div className={'ConsoleContainer'}>
        <div className={'ConsoleHeader'}>
          <span className={'ConsoleHeaderTitle'}>
            Console
          </span>
          <FontAwesomeIcon icon={faXmark} className={'ConsoleHeaderX'} />
        </div>
        <div className={'ConsoleBottom'}>
          <div className={'ConsoleLogs'}>

          </div>
          <div className={'ConsoleControls'}>
            <input type='search' className='CommandInput'/>
            <Button title={'Submit'} className={'CommandSubmit'}/>
          </div>
        </div>
      </div>
    </Draggable>
  )
}
