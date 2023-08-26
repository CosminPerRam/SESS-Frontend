import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu, setPopupCoords } from "../redux/contextMenu/slice";

export const useActiveMenu = () => {
  const dispatch = useDispatch();

  const activeMenu = useSelector((state) => state.contextMenu.activeMenu);
  const popupCoords = useSelector((state) => state.contextMenu.popupCoords);
  const openMenu = (e, menu) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(setPopupCoords({ x: e.pageX, y: e.pageY }));
    dispatch(setActiveMenu(menu));
  };

  const closeMenu = () => {
    dispatch(setPopupCoords(null));
    dispatch(setActiveMenu(null));
  };

  return {
    openMenu,
    activeMenu,
    popupCoords,
    closeMenu,
  };
};
