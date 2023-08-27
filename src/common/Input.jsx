import { useActiveMenu } from "../hooks/useActiveMenu";

export const Input = ({
  style,
  value,
  handleInput,
  menu,
  className,
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
      onChange={handleInput}
      onContextMenu={openMenu(menu)}
      onKeyDown={onKeyDown}
      ref={nodeRef}
    />
  );
};
