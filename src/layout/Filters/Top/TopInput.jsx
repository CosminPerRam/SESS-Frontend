import { Input } from "../../../common/Input";

export const TopInput = ({ value, onChange, menu }) => {
  return (
    <Input
      type="search"
      className={`top-input`}
      value={value}
      onChange={onChange}
      menu={menu}
    />
  );
};
