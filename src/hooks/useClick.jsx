import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveMenu, setPopupCoords } from "../redux/contextMenu/slice";

export const useClick = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const handleClickOutside = () => {
      dispatch(setActiveMenu(null));
      dispatch(setPopupCoords(null));
    };
    document.addEventListener("mouseup", handleClickOutside);
    window.addEventListener("resize", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      window.removeEventListener("resize", handleClickOutside);
    };
  }, [dispatch]);
};
