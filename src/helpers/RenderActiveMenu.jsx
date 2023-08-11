import {useDispatch, useSelector} from "react-redux";
import {ServerMenu} from "../contextMenus/ServerMenu";
import {TableHeaderMenu} from "../contextMenus/TableHeaderMenu";
import {InputMenu} from "../contextMenus/InputMenu";
import {
    setActiveMenu,
    setInputCommand,
    setInputMap,
    setInputMapPlayerCount,
    setInputServer
} from "../redux/contextMenu/slice";
import {useClickOutside} from "../hooks/useClickOutside";
import {useRef} from "react";
import {useClick} from "../hooks/useClick";

export const RenderActiveMenu = () => {
    const nodeRef = useRef(null);
    const dispatch = useDispatch();
    const activeMenu = useSelector((state) => state.contextMenu.activeMenu);
    const popupCoords = useSelector((state) => state.contextMenu.popupCoords);
    useClick();
    
    const map = useSelector((state) => state.contextMenu.inputMap);
    const mapPlayerCount = useSelector((state) => state.contextMenu.inputMapPlayerCount);
    const serverInput = useSelector((state) => state.contextMenu.inputServer);
    const command = useSelector((state) => state.contextMenu.inputCommand);
    if(activeMenu === "server")
        return <ServerMenu left={popupCoords.x} top={popupCoords.y} nodeRef={nodeRef}/>
    if(activeMenu === "header")
        return <TableHeaderMenu  left={popupCoords.x} top={popupCoords.y}  nodeRef={nodeRef}/>
    if(activeMenu === "map")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputMap} input={map}  nodeRef={nodeRef}/>
    if(activeMenu === "mapPlayerCount")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputMapPlayerCount} input={mapPlayerCount}  nodeRef={nodeRef}/>
    if(activeMenu === "serverInput")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputServer} input={serverInput}  nodeRef={nodeRef}/>
    if(activeMenu === "command")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputCommand} input={command}  nodeRef={nodeRef}/>
    return null;
}
