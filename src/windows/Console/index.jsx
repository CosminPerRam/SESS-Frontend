import { Window } from "../Window";
import { Logs } from "./Logs";
import { Command } from "./Command";

export const Console = ({ nodeRef }) => {
  return (
    <Window title={`Console`} nodeRef={nodeRef}>
      <Logs />
      <Command />
    </Window>
  );
};
