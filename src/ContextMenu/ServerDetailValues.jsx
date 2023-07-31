export const ServerDetailValues = ({name, ip, game, map, players, vac, latency}) => {
    return <div className="server-detail-values">
            <div className="server-detail-value">{name}</div>
            <div className="server-detail-value">{ip}</div>
            <div className="server-detail-value">{game}</div>
            <div className="server-detail-value">{map}</div>
            <div className="server-detail-value">{players}</div>
            <div className="server-detail-value">{vac}</div>
            <div className="server-detail-value">{latency}</div>
    </div>
}