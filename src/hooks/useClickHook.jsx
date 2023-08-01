import {useEffect, useState} from "react";

export const useClickHook = () => {
  const [popupPoints, setPopupPoints] = useState(null);

  useEffect(() => {
    const handleClick = () => setPopupPoints(null);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return { popupPoints, setPopupPoints };
}
