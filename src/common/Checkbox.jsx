import { Label } from "./Label";
import { CheckMark } from "./CheckMark";

export const Checkbox = ({
  title,
  checked = false,
  disabled = false,
  onChanged,
  className,
}) => {
  return (
    <div className="form-element" onMouseDown={onChanged}>
      <div className={`checkbox ${className}`}>
        {checked ? <CheckMark disabled={disabled} /> : null}
      </div>

      <Label
        name={title}
        onMouseDown={onChanged}
        style={disabled ? { color: `#847A68` } : {}}
      />
    </div>
  );
};
