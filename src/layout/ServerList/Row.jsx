import {
  Cell,
  Row as TableRow,
} from "@table-library/react-table-library/table";
import { PasswordIcon } from "../../assets/icons/password";
import { RobotronIcon } from "../../assets/icons/robotron";
import { ReplayIcon } from "../../assets/icons/replay";
import { useSelector } from "react-redux";
import { setActiveMenu, setPopupCoords } from "../../redux/contextMenu/slice";
import { setServerDetails } from "../../redux/window/slice";
import { useDispatchHandler } from "../../hooks/useDispatchHandler";

const onDoubleClick = (item, event) => {
  console.log(`double clicked on` + item.name);
};

export const Row = ({ item, select }) => {
  const {
    id,
    name,
    map,
    game,
    playersOnline,
    playersMaximum,
    playersBots,
    vacSecured,
    hasPassword,
    supportsReplays,
  } = item;
  const handleDispatch = useDispatchHandler();
  const hiddenColumns = useSelector((state) => state.contextMenu.hiddenColumns);

  return (
    <TableRow
      key={id}
      item={item}
      disabled={id === select.state.id}
      onDoubleClick={onDoubleClick}
      onContextMenu={(e) =>
        handleDispatch(
          e,
          setActiveMenu(`server`),
          setPopupCoords({ x: e.pageX, y: e.pageY }),
          setServerDetails(item),
        )
      }
    >
      <Cell hide={hiddenColumns[`Password`]}>
        {hasPassword ? <PasswordIcon /> : null}
      </Cell>
      <Cell hide={hiddenColumns[`Secure`]}>
        {vacSecured ? <RobotronIcon /> : null}
      </Cell>
      <Cell hide={hiddenColumns[`Replay`]}>
        {supportsReplays ? <ReplayIcon /> : null}
      </Cell>
      <Cell hide={hiddenColumns[`Servers`]}>{name}</Cell>
      <Cell hide={hiddenColumns[`IP Address`]}>IP_HERE</Cell>
      <Cell hide={hiddenColumns[`Game`]}>{game}</Cell>
      <Cell
        hide={hiddenColumns[`Players`]}
      >{`${playersOnline}/${playersMaximum}`}</Cell>
      <Cell hide={hiddenColumns[`Bots`]}>{playersBots}</Cell>
      <Cell hide={hiddenColumns[`Map`]}>{map}</Cell>
      <Cell hide={hiddenColumns[`Latency`]}>{`Latency`}</Cell>
      <Cell hide={hiddenColumns[`Tags`]}>{`Tags`}</Cell>
    </TableRow>
  );
};
