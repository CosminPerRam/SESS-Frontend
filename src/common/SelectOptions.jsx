import { useDispatch } from "react-redux";

export const SelectOptions = ({ options, setOption }) => {
  const dispatch = useDispatch();
  const handleClick = (event, option) => {
    event.stopPropagation();
    if (option === `<All>`) dispatch(setOption(null));
    else if (option === `Secure`) dispatch(setOption(true));
    else if (option === `Not Secure`) dispatch(setOption(false));
    else dispatch(setOption(option));
  };

  return (
    <div className="select-options">
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
