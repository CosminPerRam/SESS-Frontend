import '../contextMenu.scss'
import {useDispatch, useSelector} from "react-redux";
import {setActiveMenu, setPopupCoords} from "../../redux/contextMenu/slice";
import {setActiveWindow} from "../../redux/window/slice";

export const ServerMenu = ({top, left, nodeRef}) => {
    const dispatch = useDispatch();
    
    return <div className="context-menu" style={{top: top + 'px', left: left + 'px'}} ref={nodeRef}>
        <div className="context-menu-element">Connect to server</div>
        <div className="context-menu-element" onMouseDown={() => dispatch(setActiveWindow("serverInfo"))}>View server info</div>
        <div className="context-menu-element">Refresh server</div>
        <div className="context-menu-element">Add server to favorites</div>
        <div className="context-menu-element">Add server to blacklist</div>
    </div>
}