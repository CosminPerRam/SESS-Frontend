import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { addConsoleLine, setInputCommand } from "../redux/window/slice";

export const useConsole = () => {
  const dispatch = useDispatch();

  const currentCommand = useSelector((state) => state.window.inputCommand);

  const updateCurrentCommand = useCallback((value) => {
    dispatch(setInputCommand(value));
  }, []);

  const addCLine = useCallback((text, options = {}) => {
    dispatch(addConsoleLine({ text, options }));
  }, []);

  const executeCommand = useCallback((value) => {
    addCLine(`Unknown command "${value}"`);
  }, []);

  return {
    currentCommand,
    updateCurrentCommand,
    addConsoleLine: addCLine,
    executeCommand,
  };
};
