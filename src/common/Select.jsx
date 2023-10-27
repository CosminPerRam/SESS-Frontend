import { SelectOptions } from "./SelectOptions";
import { useEffect, useRef, useState } from "react";

export const Select = ({
  label,
  style,
  options,
  setOption,
  selectedOption,
}) => {
  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    setOptionsOpen(!optionsOpen);
  };
  //WHY can't it behave like a context menu???????/
  return (
    <div className="form-element">
      {label}
      <div className="select" style={style} onClick={(e) => handleClick(e)}>
        {optionsOpen && (
          <SelectOptions
            options={options}
            setOption={setOption}
            setOptionsOpen={setOptionsOpen}
          />
        )}
        {
          //this is kinda scuffed
          selectedOption === true
            ? `Secure`
            : selectedOption === false
            ? `Not Secure`
            : selectedOption
        }
      </div>
      <div className="arrow-down"></div>
    </div>
  );
};
