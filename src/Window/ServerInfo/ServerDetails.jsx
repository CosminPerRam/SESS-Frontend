import { useDispatch } from "react-redux";
import { setActiveMenu, setPopupCoords } from "../../redux/contextMenu/slice";
import { ServerDetailsItem } from "./ServerDetailsItem";
export const ServerDetails = ({
  name,
  ip,
  game,
  map,
  players,
  vac,
  latency,
}) => {
  const dispatch = useDispatch();
  const handleSetActiveMenu = (menu, popupCoords, e) => {
    e.preventDefault();
    dispatch(setActiveMenu(menu));
    dispatch(setPopupCoords(popupCoords));
  };
  return (
    <div className='server-details'>
      <ServerDetailsItem name={"Name"} value={name} />
      <ServerDetailsItem
        name={"IP Address"}
        value={ip}
        onContextMenu={(e) =>
          handleSetActiveMenu("readOnly", { x: e.pageX, y: e.pageY }, e)
        }
      />
      <ServerDetailsItem name={"Game"} value={game} />
      <ServerDetailsItem name={"Map"} value={map} />
      <ServerDetailsItem name={"Players"} value={players} />
      <ServerDetailsItem name={"Valve Anti-Cheat"} value={vac} />
      <ServerDetailsItem name={"Latency"} value={latency} />
    </div>
  );
};
