import { useSelector } from "react-redux";
import { ServerMenu } from "../contextMenus/ServerMenu";
import { TableHeaderMenu } from "../contextMenus/TableHeaderMenu";
import { InputMenu } from "../contextMenus/InputMenu";
import { setInputCommand } from "../redux/contextMenu/slice";
import { useRef } from "react";
import { useClick } from "../hooks/useClick";
import { ReadOnlyMenu } from "../contextMenus/ReadOnlyMenu";
import { setHasTags, setRunsMap } from "../redux/filters/slice";
import { setMaxPlayerCount } from "../redux/localFilters/slice";

export const RenderActiveMenu = () => {
  useClick();
  const nodeRef = useRef(null);

  const activeMenu = useSelector((state) => state.contextMenu.activeMenu);
  const popupCoords = useSelector((state) => state.contextMenu.popupCoords);

  const runsMap = useSelector((state) => state.filters.runsMap);
  const maxPlayerCount = useSelector((state) => state.filters.maxPlayerCount);
  const hasTags = useSelector((state) => state.filters.hasTags);
  const command = useSelector((state) => state.contextMenu.inputCommand);

  // refactor this to use map or directly pass the component in activeMenu todo!
  if (activeMenu === "server")
    return (
      <ServerMenu left={popupCoords.x} top={popupCoords.y} nodeRef={nodeRef} />
    );
  if (activeMenu === "header")
    return (
      <TableHeaderMenu
        left={popupCoords.x}
        top={popupCoords.y}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === "map")
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setRunsMap}
        input={runsMap}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === "maxPlayerCount")
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setMaxPlayerCount}
        input={maxPlayerCount}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === "serverInput")
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setHasTags}
        input={hasTags}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === "command")
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setInputCommand}
        input={command}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === "readOnly")
    return (
      <ReadOnlyMenu
        left={popupCoords.x}
        top={popupCoords.y}
        input={command}
        nodeRef={nodeRef}
      />
    );
  return null;
};
