import './style.scss'
import Draggable from "react-draggable";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button} from "../Button";
import {useEffect, useState} from "react";

export const Console = () => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === '\`' && e.target.tagName !== 'INPUT')
        setHidden(!hidden);
    });
  }, [setHidden, hidden]);

  return (
    <div hidden={hidden}>
      <Draggable
        handle=".ConsoleHeader"
        defaultPosition={{x: 320, y: 110}}
      >
        <div className={'ConsoleContainer'}>
          <div className={'ConsoleHeader'}>
            <span className={'ConsoleHeaderTitle'}>
              Console
            </span>
            <FontAwesomeIcon icon={faXmark} className={'ConsoleHeaderX'} onClick={() => setHidden(true)}/>
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
    </div>
  )
}
