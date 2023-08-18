import { useDispatch, useSelector } from "react-redux";
import { setHiddenColumns } from "../../redux/contextMenu/slice";
import { MenuOption } from "./MenuOption";
import "../contextMenu.scss";
export const TableHeaderMenu = ({ top, left, nodeRef }) => {
  const hiddenColumns = useSelector((state) => state.contextMenu.hiddenColumns);
  const dispatch = useDispatch();

  const labels = [
    "Password",
    "Secure",
    "Replay",
    "Servers",
    "IP Address",
    "Game",
    "Players",
    "Bots",
    "Map",
    "Latency",
    "Tags",
  ];

  return (
    <div
      style={{ top: top + "px", left: left + "px" }}
      className="context-menu"
      ref={nodeRef}
    >
      {labels.map((label) =>
        label === "Servers" ? (
          <MenuOption
            title={label}
            disabled={true}
            checked={true}
            key={label}
          />
        ) : (
          <MenuOption
            title={label}
            disabled={false}
            checked={!hiddenColumns[label]}
            onChanged={() => dispatch(setHiddenColumns(label))}
            key={label}
          />
        ),
      )}
    </div>
  );
};
