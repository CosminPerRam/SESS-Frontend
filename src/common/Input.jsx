import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu, setPopupCoords } from "../redux/contextMenu/slice";

export const Input = ({ style, value, handleInput, menu, className }) => {
  const dispatch = useDispatch();

  const handleSetActiveMenu = (menu, popupCoords, e) => {
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    dispatch(setPopupCoords(popupCoords));
  };

  return (
    <input
      type="search"
      className={className}
      style={style}
      value={value}
      onChange={(e) => handleInput(e)}
      onContextMenu={(e) => {
        handleSetActiveMenu(menu, { x: e.pageX, y: e.pageY }, e);
      }}
    />
  );
};
