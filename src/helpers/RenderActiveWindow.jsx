import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {setActiveWindow} from "../redux/window/slice";
import {Console} from "../Window/Console";
import {useClickOutside} from "../hooks/useClickOutside";
import {ServerInfo} from "../Window/ServerInfo";
import {setActiveMenu} from "../redux/contextMenu/slice";

export const RenderActiveWindow = () => {
    const dispatch = useDispatch();
    const activeWindow = useSelector((state) => state.window.activeWindow);
    const nodeRef = useRef(null);

    useClickOutside(nodeRef);
    
    useEffect(() => {
        const handleKeyDownEvent = e => {
            if (e.key === '`' && e.target.tagName !== 'INPUT') {
                if (activeWindow === "console")
                    dispatch(setActiveWindow(null));
                else
                    dispatch(setActiveWindow("console"));
            }
        };

        window.addEventListener('keydown', handleKeyDownEvent);
        return () => {
            window.removeEventListener('keydown', handleKeyDownEvent);
        }
    }, [activeWindow, dispatch]);

    if (activeWindow === "console")
        return <Console nodeRef={nodeRef}/>;
    if(activeWindow === "serverInfo")
        return <ServerInfo nodeRef={nodeRef} />;
    
    return null;
}