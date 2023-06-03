import './style.scss'
import Draggable from "react-draggable";
import {useEffect, useRef, useState} from "react";
import {ContextProvider} from "./context";
import {Header} from "./components/header";
import {Bottom} from "./components/bottom";

export const Console = ({children}) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.key === '`' && e.target.tagName !== 'INPUT')
        setHidden(!hidden);
    });
  }, [setHidden, hidden]);

  const nodeRef = useRef(null);

  return (
    <ContextProvider>
      <div hidden={hidden}>
        <Draggable
          handle=".ConsoleHeader"
          defaultPosition={{x: 320, y: 110}}
          nodeRef={nodeRef}
        >
          <div className={'ConsoleContainer'} ref={nodeRef}>
            <Header onCloseClick={() => setHidden(true)}/>
            <Bottom />
          </div>
        </Draggable>
      </div>
      {children}
    </ContextProvider>
  )
}
