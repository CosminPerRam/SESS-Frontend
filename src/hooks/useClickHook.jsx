import {useEffect, useState} from "react";

export const useClickHook = () => {
  const [popupPoints, setPopupPoints] = useState(null);

  useEffect(() => {
    const handleClick = (e) => {
      if(e.target.className === 'form-element' || e.target?.parentNode?.className === 'form-element')
        return; // form-element can take click priority

      setPopupPoints(null)
    };
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return { popupPoints, setPopupPoints };
}
