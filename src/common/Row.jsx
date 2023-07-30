import {Cell, Row as TableRow} from "@table-library/react-table-library/table";
import {PasswordIcon} from "../assets/icons/password";
import {RobotronIcon} from "../assets/icons/robotron";
import {ReplayIcon} from "../assets/icons/replay";

const onDoubleClick = (item, event) => {
  console.log('double clicked on' + item.name);
}

export const Row = ({item, setPoints, setClicked, setItem}) => {
  const {id, name, map, game, playersOnline, playersMaximum, playersBots, vacSecured, hasPassword, supportsReplays} = item;
  
  return <TableRow key={id} item={item} onDoubleClick={onDoubleClick} onContextMenu={(e) => {
    e.preventDefault();
    setClicked(true);
    setPoints({
      x: e.pageX,
      y: e.pageY,
    });
    setItem(item);
  }}>
    <Cell>{hasPassword ? <PasswordIcon /> : null}</Cell>
    <Cell>{supportsReplays ? <RobotronIcon /> : null}</Cell>
    <Cell>{vacSecured ? <ReplayIcon /> : null}</Cell>
    <Cell>{name}</Cell>
    <Cell>{game}</Cell>
    <Cell>{`${playersOnline}/${playersMaximum}`}</Cell>
    <Cell>{playersBots}</Cell>
    <Cell>{map}</Cell>
    <Cell>{'Latency'}</Cell>
    <Cell>{'Tags'}</Cell>
  </TableRow>
}
