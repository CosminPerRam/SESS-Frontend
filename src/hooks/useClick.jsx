import { useEffect } from "react";
import { setActiveMenu, setPopupCoords } from "../redux/contextMenu/slice";
import { useDispatchHandler } from "./useDispatchHandler";

export const useClick = () => {
  const handleDispatch = useDispatchHandler();

  useEffect(() => {
    document.addEventListener("mouseup", () =>
      handleDispatch(null, setActiveMenu(null), setPopupCoords(null))
    );
    window.addEventListener("resize", () =>
      handleDispatch(null, setActiveMenu(null), setPopupCoords(null))
    );
    return () => {
      document.removeEventListener("mouseup", () =>
        handleDispatch(null, setActiveMenu(null), setPopupCoords(null))
      );
      window.removeEventListener("resize", () =>
        handleDispatch(null, setActiveMenu(null), setPopupCoords(null))
      );
    };
  }, [handleDispatch]);
};
