import Draggable from "react-draggable";
import {Header} from "./Header";
import {setActiveWindow} from "../redux/window/slice";
import "./windows.scss"
import {useDispatch} from "react-redux";
export const Window = ({children, title, nodeRef}) => {
    const dispatch = useDispatch();
    
    return <Draggable handle=".window-header" defaultPosition={{x: 320, y: 110}}>
        <div className='window-container' ref={nodeRef}>
            <Header onCloseClick={() => dispatch(setActiveWindow(null))} title={title}/>
                {children}
        </div>
    </Draggable>
}
  