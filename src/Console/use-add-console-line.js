import {useCallback, useContext} from "react";
import {ConsoleContext} from "./context";

export const useAddConsoleLine = () => {
  const { lines, setLines } = useContext(ConsoleContext);

  return useCallback(({text, color}) => {
    setLines([...lines, {text, color}])
  }, [setLines, lines]);
}
