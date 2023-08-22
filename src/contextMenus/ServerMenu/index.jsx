import "../contextMenu.scss";
import { useDispatch } from "react-redux";
import { setActiveMenu, setPopupCoords } from "../../redux/contextMenu/slice";
import { useActiveWindow } from "../../hooks/useActiveWindow";
import { windows } from "../../core/windows";

export const ServerMenu = ({ top, left, nodeRef }) => {
  const { openWindow } = useActiveWindow();
  const dispatch = useDispatch();
  //poti verifica daca ai dat left click sau right click cu event.button 0 pentru left 2 pentru right

  return (
    <div
      className="context-menu"
      style={{ top: top + `px`, left: left + `px` }}
      ref={nodeRef}
    >
      <div className="context-menu-element">Connect to server</div>
      <div
        className="context-menu-element"
        onClick={(e) => {
          e.stopPropagation();
          openWindow(windows.serverInfo);
          dispatch(setActiveMenu(null));
          dispatch(setPopupCoords(null));
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        View server info
      </div>
      <div className="context-menu-element">Refresh server</div>
      <div className="context-menu-element">Add server to favorites</div>
      <div className="context-menu-element">Add server to blacklist</div>
    </div>
  );
};
