import {Cell, Row as TableRow} from "@table-library/react-table-library/table";
import {PasswordIcon} from "../assets/icons/password";
import {RobotronIcon} from "../assets/icons/robotron";
import {ReplayIcon} from "../assets/icons/replay";

const onDoubleClick = (item, event) => {
  console.log('double clicked on' + item.name);
}

export const Row = ({item, setPoints, setClicked, setItem}) => {
  const {id, name, map, game, players_online, players_maximum, players_bots, vac_secured, has_password, supports_replays} = item;
  
  return <TableRow key={id} item={item} onDoubleClick={onDoubleClick} onContextMenu={(e) => {
    e.preventDefault();
    setClicked(true);
    setPoints({
      x: e.pageX,
      y: e.pageY,
    });
    setItem(item);
  }}>
    <Cell>{has_password ? <PasswordIcon /> : null}</Cell>
    <Cell>{supports_replays ? <RobotronIcon /> : null}</Cell>
    <Cell>{vac_secured ? <ReplayIcon /> : null}</Cell>
    <Cell>{name}</Cell>
    <Cell>{game}</Cell>
    <Cell>{`${players_online}/${players_maximum}`}</Cell>
    <Cell>{players_bots}</Cell>
    <Cell>{map}</Cell>
    <Cell>{'Latency'}</Cell>
    <Cell>{'Tags'}</Cell>
  </TableRow>
}
