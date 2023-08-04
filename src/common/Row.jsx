import {Cell, Row as TableRow} from "@table-library/react-table-library/table";
import {PasswordIcon} from "../assets/icons/password";
import {RobotronIcon} from "../assets/icons/robotron";
import {ReplayIcon} from "../assets/icons/replay";
import {useDispatch, useSelector} from "react-redux";
import {setActiveMenu, setPopupCoords} from "../redux/contextMenu/slice";
import {useRef} from "react";
import {useClickOutside} from "../hooks/useClickOutside";

const onDoubleClick = (item, event) => {
  console.log('double clicked on' + item.name);
}

export const Row = ({item, hiddenColumns}) => {
  const {id, name, map, game, playersOnline, playersMaximum, playersBots, vacSecured, hasPassword, supportsReplays} = item;
  const dispatch = useDispatch();
  const handleSetActiveMenu = (menu, popupCoords, e) => {
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    dispatch(setPopupCoords(popupCoords));
  };
  

  
  return <TableRow key={id} item={item}
                   onDoubleClick={onDoubleClick} 
                   onContextMenu={(e) => handleSetActiveMenu("server", {x: e.pageX, y: e.pageY}, e)}>
    <Cell hide={hiddenColumns["Password"]} >{hasPassword ? <PasswordIcon /> : null}</Cell>
    <Cell hide={hiddenColumns["Secure"]} >{vacSecured ? <ReplayIcon /> : null}</Cell>
    <Cell hide={hiddenColumns["Replay"]} >{supportsReplays ? <RobotronIcon /> : null}</Cell>
    <Cell hide={hiddenColumns["Servers"]} >{name}</Cell>
    <Cell hide={hiddenColumns["IP Address"]} >IP_HERE</Cell>
    <Cell hide={hiddenColumns["Game"]} >{game}</Cell>
    <Cell hide={hiddenColumns["Players"]} >{`${playersOnline}/${playersMaximum}`}</Cell>
    <Cell hide={hiddenColumns["Bots"]} >{playersBots}</Cell>
    <Cell hide={hiddenColumns["Map"]} >{map}</Cell>
    <Cell hide={hiddenColumns["Latency"]} >{'Latency'}</Cell>
    <Cell hide={hiddenColumns["Tags"]} >{'Tags'}</Cell>
  </TableRow>
}
