import {useDispatch, useSelector} from "react-redux";
import {ServerMenu} from "../contextMenus/ServerMenu";
import {useRef, useState} from "react";
import {useClickOutside} from "../hooks/useClickOutside";
import {TableHeaderMenu} from "../contextMenus/TableHeaderMenu";
import {InputMenu} from "../contextMenus/InputMenu";
import {setInputMap, setInputMapPlayerCount, setInputServer} from "../redux/contextMenu/slice";

export const RenderActiveMenu = () => {
    const activeMenu = useSelector((state) => state.contextMenu.activeMenu);
    const popupCoords = useSelector((state) => state.contextMenu.popupCoords);
    useClickOutside();
    
    const map = useSelector((state) => state.contextMenu.inputMap);
    const mapPlayerCount = useSelector((state) => state.contextMenu.inputMapPlayerCount);
    const serverInput = useSelector((state) => state.contextMenu.inputServer);
    
    if(activeMenu === "server")
        return <ServerMenu left={popupCoords.x} top={popupCoords.y} />
    if(activeMenu === "header")
        return <TableHeaderMenu  left={popupCoords.x} top={popupCoords.y} />
    if(activeMenu === "map")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputMap} input={map}/>
    if(activeMenu === "mapPlayerCount")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputMapPlayerCount} input={mapPlayerCount}/>
    if(activeMenu === "serverInput")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputServer} input={serverInput}/>
    return null;
}
