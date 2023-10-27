import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";

export const SelectOptions = ({ options, setOption, setOptionsOpen }) => {
  const dispatch = useDispatch();
  const handleClick = (event, option) => {
    event.stopPropagation();
    if (option === `<All>`) dispatch(setOption(null));
    //scuffed again
    else if (option === `Secure`) dispatch(setOption(true));
    else if (option === `Not Secure`) dispatch(setOption(false));
    else dispatch(setOption(option));
  };

  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target))
        setOptionsOpen(false);
      console.log(setOptionsOpen);
    };

    document.addEventListener(`click`, handleClickOutside);

    return () => {
      document.removeEventListener(`click`, handleClickOutside);
    };
  }, []);

  return (
    <div className="select-options" ref={nodeRef}>
      {options.map((option) => (
        <div
          className="select-option"
          key={option}
          onMouseDown={(e) => handleClick(e, option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
