import Draggable from "react-draggable";
import {Header} from "../console/components/header";
import {ContextProvider} from "../console/context";
import {useRef} from "react";
import {useClickOutside} from "../hooks/useClickOutside";
import {ServerDetails} from "./ServerDetails";
import {theme} from "../layout/ServerList/theme";
import {Header as TableHeader, HeaderCell, HeaderRow, Table, Body as TableBody, Row as TableRow, Cell} from "@table-library/react-table-library/table";
import {useRowSelect} from "@table-library/react-table-library/select";
import {Button} from "../common/Button";

const Row = ({item}) => {
    return (
      <TableRow item={item}>
          <Cell>{item.name}</Cell>
          <Cell>{item.score}</Cell>
          <Cell>{item.duration}</Cell>
      </TableRow>
    )
}

const ServerInfoTable = ({item}) => {
    const players = item.players;
    const data = { nodes: players };
    
    const select = useRowSelect(data, {
        onChange: (action, state) => {
            console.log(action, state);
        }
    });
    
    return ( <Table data={data} theme={theme("minmax(24px, 1fr) minmax(24px, 1fr) 90px", "4px", "6px")} select={select} layout={{custom: true, fixedHeader: true}}>
        {(tableList) => (
            <>
                <TableHeader>
                    <HeaderRow>
                        <HeaderCell resize={{ minWidth: 156 }}>Player Name</HeaderCell>
                        <HeaderCell resize={{ minWidth: 64 }}>Score</HeaderCell>
                        <HeaderCell>Time</HeaderCell>
                    </HeaderRow>
                </TableHeader>
                <TableBody>
                    { tableList.map(item => <Row item={item} key={item.id} />) }
                </TableBody>
            </>
        )}
    </Table> )
}

export const ServerInfo = ({children, setHidden, item}) => {
    const nodeRef = useRef(null);
    useClickOutside(nodeRef, setHidden);
    
    return <ContextProvider>
        <div>
            <Draggable
                handle=".console-header"
                defaultPosition={{x: 320, y: 0}}
                nodeRef={nodeRef}
            >
                <div className='server-details-container' ref={nodeRef}>
                    <Header onCloseClick={() => {
                        setHidden(true)
                    }} title={"Game Info - " + item.name}/>
                    
                    <ServerDetails name={item.name} ip={"pula si caciula"} game={item.game} map={item.map} players={`${item.playersOnline} / ${item.playersMaximum}`} vac={item.vacSecured ? "Secure" : "Not Secure"} latency={"Pula si cacliula :o"} />
                    
                    <div className={"server-details-table"}>
                        <ServerInfoTable item={item}/>
                        { item.players.length === 0 && <div className={"details-no-users"}>No users currently playing on this server.</div>}
                    </div>
                    <div className="context-menu-buttons">
                        <Button title={"Join game"} style={{width: "80px"}}/>
                        <Button title={"Refresh"} style={{width: "80px"}}/>
                        <Button title={"Close"} style={{width: "80px"}}/>
                    </div>
                </div>
            </Draggable>
        </div>
        {children}
    </ContextProvider>
}