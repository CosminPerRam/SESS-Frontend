import { Button } from "../../common/Button";
import { Input } from "../../common/Input";
import { useConsole } from "./useConsole";
import { setActiveWindow } from "../../redux/window/slice";
import { useDispatch } from "react-redux";

export const Command = () => {
  const dispatch = useDispatch();

  const {
    currentCommand,
    updateCurrentCommand,
    addConsoleLine,
    executeCommand,
  } = useConsole();

  const addLine = () => {
    if (currentCommand !== ``) {
      addConsoleLine(`] ${currentCommand}`);
      executeCommand(currentCommand);
      updateCurrentCommand(``);
    }
  };

  const updateCommand = (e) => {
    if (e.key === `\``) {
      dispatch(setActiveWindow(null));
    } else if (e.key === `Enter`) {
      e.preventDefault();
      addLine();
    }
  };

  return (
    <div className="command">
      <Input
        type="search"
        value={currentCommand}
        handleInput={(e) => updateCurrentCommand(e.target.value)}
        menu={`command`}
        className={`command-input`}
        onKeyDown={updateCommand}
      />
      <Button
        title={`Submit`}
        style={{ marginLeft: `12px`, marginRight: `7px` }}
        onClick={() => addLine()}
      />
    </div>
  );
};
