import { Button } from "../../common/Button";
import { Input } from "../../common/Input";
import { useConsole } from "../../hooks/useConsole";
import { useActiveWindow } from "../../hooks/useActiveWindow";

export const Command = () => {
  const { closeWindow } = useActiveWindow();

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
      closeWindow();
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
