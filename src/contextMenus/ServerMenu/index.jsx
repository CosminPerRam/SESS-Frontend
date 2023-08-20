import "../contextMenu.scss";
import { useDispatch } from "react-redux";
import { setActiveWindow } from "../../redux/window/slice";
import { setActiveMenu, setPopupCoords } from "../../redux/contextMenu/slice";

export const ServerMenu = ({ top, left, nodeRef }) => {
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
          dispatch(setActiveWindow(`serverInfo`));
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
