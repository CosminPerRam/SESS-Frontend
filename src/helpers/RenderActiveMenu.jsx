﻿import {useDispatch, useSelector} from "react-redux";
import {ServerMenu} from "../contextMenus/ServerMenu";
import {useRef, useState} from "react";
import {useClickOutside} from "../hooks/useClickOutside";
import {TableHeaderMenu} from "../contextMenus/TableHeaderMenu";

export const renderActiveMenu = () => {
    const [hiddenColumns, setHiddenColumns] = useState({
        Password: false,
        Secure: false,
        Replay: false,
        Servers: false,
        ["IP Address"]: true,
        Game: false,
        Players: false,
        Bots: false,
        Map: false,
        Latency: false,
        Tags: false,
    });
    
    const activeMenu = useSelector((state) => state.contextMenu.activeMenu);
    const popupCoords = useSelector((state) => state.contextMenu.popupCoords);
    
    useClickOutside();
    
    if(activeMenu === "server")
        return <ServerMenu left={popupCoords.x} top={popupCoords.y} />
    if(activeMenu === "header")
        return <TableHeaderMenu  left={popupCoords.x} top={popupCoords.y} hiddenColumns={hiddenColumns} setHiddenColumns={setHiddenColumns}/>
    
    return null;
}