import {Header as TableHeader, HeaderCell, HeaderRow} from "@table-library/react-table-library/table";
import {PasswordIcon} from "../../assets/icons/password";
import {RobotronIcon} from "../../assets/icons/robotron";
import {ReplayIcon} from "../../assets/icons/replay";

export const Header = ({amount, blacklistedAmount}) => {
  return (
    <TableHeader>
      <HeaderRow>
        <HeaderCell><PasswordIcon /></HeaderCell>
        <HeaderCell><RobotronIcon /></HeaderCell>
        <HeaderCell><ReplayIcon /></HeaderCell>
        <HeaderCell resize={{ minWidth: 24 }}>{`Servers (${amount}) (${blacklistedAmount} blacklisted)`}</HeaderCell>
        <HeaderCell resize={{ minWidth: 100 }}>Game</HeaderCell>
        <HeaderCell>Players</HeaderCell>
        <HeaderCell>Bots</HeaderCell>
        <HeaderCell resize={{ minWidth: 100 }}>Map</HeaderCell>
        <HeaderCell>Latency</HeaderCell>
        <HeaderCell>Tags</HeaderCell>
      </HeaderRow>
    </TableHeader>
  )
}
