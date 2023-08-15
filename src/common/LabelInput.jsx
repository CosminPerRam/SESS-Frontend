import { Input } from "./Input";

export const LabelInput = ({ title, style, value, handleInput, menu }) => {
  return (
    <div className="form-element">
      {title}
      <Input
        type="search"
        className={"input"}
        style={style}
        value={value}
        handleInput={handleInput}
        menu={menu}
      />
    </div>
  );
};
