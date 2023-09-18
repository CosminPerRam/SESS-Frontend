import { useSelector } from "react-redux";
import { ServerMenu } from "../contextMenus/ServerMenu";
import { TableHeaderMenu } from "../contextMenus/TableHeaderMenu";
import { InputMenu } from "../contextMenus/InputMenu";
import { setInputCommand } from "../redux/window/slice";
import { useRef } from "react";
import { useClick } from "../hooks/useClick";
import { ReadOnlyMenu } from "../contextMenus/ReadOnlyMenu";
import { setHasTags, setRunsMap } from "../redux/filters/slice";
import { setMaxPlayerCount } from "../redux/localFilters/slice";
import { useActiveMenu } from "../hooks/useActiveMenu";
import { AddServerMenu } from "../contextMenus/AddServerMenu";

export const RenderActiveMenu = () => {
  //useClick();
  const nodeRef = useRef(null);
  const { activeMenu, popupCoords } = useActiveMenu();

  const runsMap = useSelector((state) => state.filters.runsMap);
  const maxPlayerCount = useSelector((state) => state.filters.maxPlayerCount);
  const hasTags = useSelector((state) => state.filters.hasTags);
  const command = useSelector((state) => state.window.inputCommand);

  if (activeMenu === `server`)
    return (
      <ServerMenu left={popupCoords.x} top={popupCoords.y} nodeRef={nodeRef} />
    );
  if (activeMenu === `header`)
    return (
      <TableHeaderMenu
        left={popupCoords.x}
        top={popupCoords.y}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === `map`)
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setRunsMap}
        input={runsMap}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === `maxPlayerCount`)
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setMaxPlayerCount}
        input={maxPlayerCount}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === `serverInput`)
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setHasTags}
        input={hasTags}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === `command`)
    return (
      <InputMenu
        left={popupCoords.x}
        top={popupCoords.y}
        setInput={setInputCommand}
        input={command}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === `readOnly`)
    return (
      <ReadOnlyMenu
        left={popupCoords.x}
        top={popupCoords.y}
        input={command}
        nodeRef={nodeRef}
      />
    );
  if (activeMenu === `addServer`)
    return (
      <AddServerMenu
        left={popupCoords.x}
        top={popupCoords.y}
        nodeRef={nodeRef}
      />
    );
  return null;
};
