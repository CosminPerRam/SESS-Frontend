import { SelectOptions } from "./SelectOptions";
import { useCallback, useEffect, useRef, useState } from "react";

export const Select = ({ label, style, value, handleInput, menu }) => {
  const [optionsOpen, setOptionsOpen] = useState(false);
  const nodeRef = useRef(null);
  console.log(optionsOpen);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target)) {
        setOptionsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (event) => {
    setOptionsOpen(!optionsOpen);
    event.stopPropagation();
  };

  return (
    <div className='form-element'>
      {label}
      <div className='select' style={style} onClick={(e) => handleClick(e)}>
        {optionsOpen && <SelectOptions nodeRef={nodeRef} />}
        ass
      </div>
      <div className='arrow-down'></div>
    </div>
  );
};
