import { useDispatch } from "react-redux";

export const DropDown = ({ label, options, style, handleChange }) => {
  return (
    <label className='form-element'>
      {label}
      <select style={style} onChange={(e) => handleChange(e)}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='arrow-down'></div>
    </label>
  );
};
