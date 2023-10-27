import { useEffect } from "react";
import { useActiveWindow } from "./useActiveWindow";

export const useClickOutside = (ref) => {
  const { closeWindow } = useActiveWindow();

  useEffect(() => {
    console.log(`c`);
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeWindow();
      }
    };
    document.addEventListener(`mouseup`, handleClickOutside);
    return () => {
      document.removeEventListener(`mouseup`, handleClickOutside);
    };
    //ref shouldn't be a dependency since it's not a state
  }, [ref]);
};
