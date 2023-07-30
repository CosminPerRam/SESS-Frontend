import Draggable from "react-draggable";
import {Header} from "../console/components/header";
import {ContextProvider} from "../console/context";
import {useRef} from "react";
import {useClickOutside} from "../hooks/useClickOutside";
import {ServerDetailNames} from "./ServerDetailNames";
import {ServerDetailValues} from "./ServerDetailValues";
import {theme} from "../layout/ServerList/theme";
import {Header as TableHeader, HeaderCell, HeaderRow, Table, Body as TableBody} from "@table-library/react-table-library/table";
import {useRowSelect} from "@table-library/react-table-library/select";

const ServerInfoTable = ({item}) => {
    const players = item.players;
    const data = { nodes: players };
    
    const select = useRowSelect(data, {
        onChange: (action, state) => {
            console.log(action, state);
        }
    });
    
    return ( <Table data={data} theme={theme} select={select} layout={{custom: true, fixedHeader: true}}>
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
                defaultPosition={{x: 320, y: 110}}
                nodeRef={nodeRef}
            >
                <div className='server-details-container' ref={nodeRef}>
                    <Header onCloseClick={() => {
                        setHidden(true)
                    }} title={"Game Info - " + item.name}/>
                    
                    <div className="server-details">
                        <ServerDetailNames items={["Name", "IP Address", "Game", "Map", "Players", "Valve Anti-Cheat", "Latency" ]} />
                        <ServerDetailValues items={[item.name, "pula si caciula", item.game, item.map, `${item.playersOnline} / ${item.playersMaximum}`, item.vacSecured ? "Secure" : "Not Secure", "Pula si cacliula :o" ]} />
                    </div>
                    <ServerInfoTable item={item}/>
                </div>
            </Draggable>
        </div>
        {children}
    </ContextProvider>
}