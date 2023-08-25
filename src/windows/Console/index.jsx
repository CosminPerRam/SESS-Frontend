import { Window } from "../Window";
import { Logs } from "./Logs";
import { Command } from "./Command";
import { useEffect } from "react";

export const Console = ({ nodeRef, inputRef }) => {
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <Window title={`Console`} nodeRef={nodeRef}>
      <Logs />
      <Command inputRef={inputRef} />
    </Window>
  );
};
