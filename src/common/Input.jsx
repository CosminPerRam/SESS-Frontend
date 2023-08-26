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
      onContextMenu={(e) => {
        openMenu(e, menu);
      }}
      onKeyDown={onKeyDown}
      ref={nodeRef}
    />
  );
};
