import { useDispatch, useSelector } from "react-redux";
import { setActiveWindow } from "../redux/window/slice";

export const useActiveWindow = () => {
  const dispatch = useDispatch();

  const activeWindow = useSelector((state) => state.window.activeWindow);

  const openWindow = (value) => {
    dispatch(setActiveWindow(value));
  };

  const closeWindow = () => {
    openWindow(null);
  };

  return {
    openWindow,
    activeWindow,
    closeWindow,
  };
};
