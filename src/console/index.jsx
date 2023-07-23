import './style.scss'
import Draggable from "react-draggable";
import {useEffect, useRef, useState} from "react";
import {ContextProvider} from "./context";
import {Header} from "./components/header";
import {Bottom} from "./components/bottom";

export const Console = ({children}) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleKeyDownEvent = e => {
      if (e.key === '`' && e.target.tagName !== 'INPUT')
        setHidden(!hidden);
    };

    window.addEventListener('keydown', handleKeyDownEvent);
    return () => { window.removeEventListener('keydown', handleKeyDownEvent); }
  }, [setHidden, hidden]);

  const nodeRef = useRef(null);

  return (
    <ContextProvider>
      <div hidden={hidden}>
        <Draggable
          handle=".console-header"
          defaultPosition={{x: 320, y: 110}}
          nodeRef={nodeRef}
        >
          <div className='console-container' ref={nodeRef}>
            <Header onCloseClick={() => setHidden(true)}/>
            <Bottom />
          </div>
        </Draggable>
      </div>
      {children}
    </ContextProvider>
  )
}
