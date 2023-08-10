import {useSelector} from "react-redux";
import {ServerMenu} from "../contextMenus/ServerMenu";
import {useClick} from "../hooks/useClick";
import {TableHeaderMenu} from "../contextMenus/TableHeaderMenu";
import {InputMenu} from "../contextMenus/InputMenu";
import {setInputCommand, setInputMap, setInputMapPlayerCount, setInputServer} from "../redux/contextMenu/slice";

export const RenderActiveMenu = () => {
    const activeMenu = useSelector((state) => state.contextMenu.activeMenu);
    const popupCoords = useSelector((state) => state.contextMenu.popupCoords);
    useClick();
    
    const map = useSelector((state) => state.contextMenu.inputMap);
    const mapPlayerCount = useSelector((state) => state.contextMenu.inputMapPlayerCount);
    const serverInput = useSelector((state) => state.contextMenu.inputServer);
    const command = useSelector((state) => state.contextMenu.inputCommand);
    
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
    if(activeMenu === "command")
        return <InputMenu left={popupCoords.x} top={popupCoords.y} setInput={setInputCommand} input={command}/>
    return null;
}
