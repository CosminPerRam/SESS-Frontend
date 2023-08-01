
const ServerDetail = ({name, value}) => {
    return (<div className="server-detail-row">
        <div className="server-detail-name">{name}:</div>
        <div className="server-detail-value">{value}</div>
    </div>)
}

export const ServerDetails = ({name, ip, game, map, players, vac, latency}) => {
    return <div className="server-details">
        <ServerDetail name={"Name"} value={name} />
        <ServerDetail name={"IP Address"} value={ip} />
        <ServerDetail name={"Game"} value={game} />
        <ServerDetail name={"Map"} value={map} />    
        <ServerDetail name={"Players"} value={players} />    
        <ServerDetail name={"Valve Anti-Cheat"} value={vac} />    
        <ServerDetail name={"Latency"} value={latency} />    
    </div>
}










