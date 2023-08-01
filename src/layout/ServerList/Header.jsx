import {Header as TableHeader, HeaderCell, HeaderRow} from "@table-library/react-table-library/table";
import {PasswordIcon} from "../../assets/icons/password";
import {RobotronIcon} from "../../assets/icons/robotron";
import {ReplayIcon} from "../../assets/icons/replay";
import {contextMenuAction} from "../../helpers/contextMenuAction";

export const Header = ({amount, hiddenColumns, blacklistedAmount, setPoints}) => {
  return (
    <TableHeader onContextMenu={contextMenuAction({setPoints})}>
      <HeaderRow>
        <HeaderCell hide={hiddenColumns["Password"]} ><PasswordIcon /></HeaderCell>
        <HeaderCell hide={hiddenColumns["Secure"]}><RobotronIcon /></HeaderCell>
        <HeaderCell hide={hiddenColumns["Replay"]}><ReplayIcon /></HeaderCell>
        <HeaderCell hide={hiddenColumns["Servers"]} resize={{ minWidth: 24 }}>{`Servers (${amount}) (${blacklistedAmount} blacklisted)`}</HeaderCell>
        <HeaderCell hide={hiddenColumns["IP Address"]} resize={{ minWidth: 100 }}>IP Address</HeaderCell>
        <HeaderCell hide={hiddenColumns["Game"]} resize={{ minWidth: 100 }}>Game</HeaderCell>
        <HeaderCell hide={hiddenColumns["Players"]}>Players</HeaderCell>
        <HeaderCell hide={hiddenColumns["Bots"]}>Bots</HeaderCell>
        <HeaderCell hide={hiddenColumns["Map"]} resize={{ minWidth: 100 }}>Map</HeaderCell>
        <HeaderCell hide={hiddenColumns["Latency"]}>Latency</HeaderCell>
        <HeaderCell hide={hiddenColumns["Tags"]}>Tags</HeaderCell>
      </HeaderRow>
    </TableHeader>
  )
}
