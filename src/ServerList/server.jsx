import {Cell, Row} from "@table-library/react-table-library/table";
import {PasswordIcon} from "../icons/password";
import {RobotronIcon} from "../icons/robotron";
import {ReplayIcon} from "../icons/replay";

const onDoubleClick = (item, event) => {
  console.log('double clicked on' + item.name);
}

export const ServerRow = ({item, select}) => {
  const {id, name, map, game, players_online, players_maximum, players_bots, vac_secured, has_password, supports_replays} = item;

  console.log(`${id}:${item.id === select.state.id}`);

  return (<Row key={id} item={item} onDoubleClick={onDoubleClick} disabled={item.id === select.state.id}>
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
  </Row>)
}
