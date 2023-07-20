import {useContext} from "react";
import {ConsoleContext} from "../context";

export const useConsoleLines = () => {
  const { lines } = useContext(ConsoleContext);

  return { lines };
}
