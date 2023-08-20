import { SelectOptions } from "./SelectOptions";
import { useEffect, useState } from "react";

export const Select = ({
  label,
  style,
  options,
  setOption,
  selectedOption,
}) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      setOptionsOpen(false);
    };

    document.addEventListener(`click`, handleClickOutside);

    return () => {
      document.removeEventListener(`click`, handleClickOutside);
    };
  }, []);

  const handleClick = (event) => {
    event.stopPropagation();
    setOptionsOpen(!optionsOpen);
  };
  return (
    <div className="form-element">
      {label}
      <div className="select" style={style} onClick={(e) => handleClick(e)}>
        {optionsOpen && (
          <SelectOptions options={options} setOption={setOption} />
        )}
        {selectedOption === true
          ? `Secure`
          : selectedOption === false
          ? `Not Secure`
          : selectedOption}
      </div>
      <div className="arrow-down"></div>
    </div>
  );
};
