import { Window } from "../Window";
import { ServerAddress } from "./ServerAddress";
import { Buttons } from "./Buttons";

export const AddServer = ({ nodeRef }) => {
  return (
    <Window
      title={`Add Server - Servers`}
      nodeRef={nodeRef}
      className={`add-server`}
    >
      <div className={`add-server-content`}>
        <ServerAddress />
        <Buttons />
      </div>
    </Window>
  );
};
