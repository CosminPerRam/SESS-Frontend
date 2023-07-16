import {Header, HeaderCell, HeaderRow} from "@table-library/react-table-library/table";
import {PasswordIcon} from "../icons/password";
import {RobotronIcon} from "../icons/robotron";
import {ReplayIcon} from "../icons/replay";

export const ServerListHeader = ({amount, blacklistedAmount}) => {
  return (
    <Header>
      <HeaderRow>
        <HeaderCell><PasswordIcon /></HeaderCell>
        <HeaderCell><RobotronIcon /></HeaderCell>
        <HeaderCell><ReplayIcon /></HeaderCell>
        <HeaderCell resize={{ minWidth: 200 }}>{`Servers (${amount}) (${blacklistedAmount} blacklisted)`}</HeaderCell>
        <HeaderCell resize={{ minWidth: 200 }}>Game</HeaderCell>
        <HeaderCell>Players</HeaderCell>
        <HeaderCell>Bots</HeaderCell>
        <HeaderCell resize={{ minWidth: 200 }}>Map</HeaderCell>
        <HeaderCell>Latency</HeaderCell>
        <HeaderCell>Tags</HeaderCell>
      </HeaderRow>
    </Header>
  )
}
