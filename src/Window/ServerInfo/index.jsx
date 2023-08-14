import {ServerDetails} from "./ServerDetails";
import {Window} from "../index";
import {useSelector} from "react-redux";
import {ServerInfoTable} from "./ServerInfoTable";
import {Buttons} from "./Buttons";

export const ServerInfo = ({nodeRef}) => {
    const item = useSelector((state) => state.window.serverDetails);
    
    return <Window nodeRef={nodeRef} title={"Game Info - " + item.name} className={"server-info"}>
        <ServerDetails name={item.name} ip={"pula si caciula"} game={item.game} map={item.map}
                       players={`${item.playersOnline} / ${item.playersMaximum}`} 
                       vac={item.vacSecured ? "Secure" : "Not Secure"} 
                       latency={"Pula si cacliula :o"} />
            <div className={"server-info-table"}>
                <ServerInfoTable item={item}/>
                { item.players.length === 0 && <div className={"table-no-users"}>No users currently playing on this server.</div>}
            </div>
        <Buttons />
    </Window>
}