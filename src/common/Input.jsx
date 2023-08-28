import { useActiveMenu } from "../hooks/useActiveMenu";

export const Input = ({
  style,
  value,
  menu,
  className,
  onChange = () => {},
  onKeyDown = () => {},
  nodeRef,
}) => {
  const { openMenu } = useActiveMenu();
  return (
    <input
      type="text"
      className={className}
      style={style}
      value={value}
      onChange={onChange}
      onContextMenu={openMenu(menu)}
      onKeyDown={onKeyDown}
      ref={nodeRef}
    />
  );
};
