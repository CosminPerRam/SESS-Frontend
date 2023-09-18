import { useActiveWindow } from "../hooks/useActiveWindow";
import { windows } from "../core/windows";
import { useDispatch } from "react-redux";
import { setActiveMenu, setPopupCoords } from "../redux/contextMenu/slice";

export const AddServerMenu = ({ top, left, nodeRef }) => {
  const { openWindow } = useActiveWindow();
  const dispatch = useDispatch();
  return (
    <div
      className="context-menu"
      style={{ top: top + `px`, left: left + `px` }}
      ref={nodeRef}
    >
      <div
        className="context-menu-element"
        onClick={(e) => {
          e.stopPropagation();
          openWindow(windows.addServer);
          dispatch(setActiveMenu(null));
          dispatch(setPopupCoords(null));
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
        }}
      >
        Add server by ID address
      </div>
    </div>
  );
};
