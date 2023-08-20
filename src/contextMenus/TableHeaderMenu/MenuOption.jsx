import { Label } from "../../common/Label";
import { CheckMark } from "../../common/CheckMark";

export const MenuOption = ({
  title,
  checked = false,
  disabled = false,
  onChanged,
}) => {
  return (
    <div
      className="context-menu-element"
      onClick={onChanged}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="checkmark-wrapper">
        {checked && <CheckMark disabled={disabled} />}
      </div>

      <Label name={title} style={disabled ? { color: `#847A68` } : {}} />
    </div>
  );
};
