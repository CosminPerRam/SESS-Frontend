import { ServerDetailsItem } from "./ServerDetailsItem";
import { useActiveMenu } from "../../hooks/useActiveMenu";
export const ServerDetails = ({
  name,
  ip,
  game,
  map,
  players,
  vac,
  latency,
}) => {
  const { openMenu } = useActiveMenu();
  return (
    <div className="server-details">
      <ServerDetailsItem name={`Name`} value={name} />
      <ServerDetailsItem
        name={`IP Address`}
        value={ip}
        onContextMenu={openMenu(`readOnly`)}
      />
      <ServerDetailsItem name={`Game`} value={game} />
      <ServerDetailsItem name={`Map`} value={map} />
      <ServerDetailsItem name={`Players`} value={players} />
      <ServerDetailsItem name={`Valve Anti-Cheat`} value={vac} />
      <ServerDetailsItem name={`Latency`} value={latency} />
    </div>
  );
};
