import { setActiveMenu, setPopupCoords } from "../redux/contextMenu/slice";
import { useDispatchHandler } from "../hooks/useDispatchHandler";

export const Input = ({
  style,
  value,
  handleInput,
  menu,
  className,
  onKeyDown = () => {},
}) => {
  const handleDispatch = useDispatchHandler();

  return (
    <input
      type="text"
      className={className}
      style={style}
      value={value}
      onChange={handleInput}
      onContextMenu={(e) => {
        handleDispatch(
          e,
          setActiveMenu(menu),
          setPopupCoords({ x: e.pageX, y: e.pageY }),
        );
      }}
      onKeyDown={onKeyDown}
    />
  );
};
