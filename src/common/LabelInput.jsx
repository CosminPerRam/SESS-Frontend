import { Input } from "./Input";

export const LabelInput = ({ title, style, value, onChange, menu }) => {
  return (
    <div className="form-element">
      <div style={{ marginRight: `5px` }}>{title}</div>
      <Input
        type="search"
        className={`input`}
        style={style}
        value={value}
        onChange={onChange}
        menu={menu}
      />
    </div>
  );
};
