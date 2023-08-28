import { Button } from "../../common/Button";
import { Input } from "../../common/Input";
import { useConsole } from "../../hooks/useConsole";
import { useActiveWindow } from "../../hooks/useActiveWindow";
import { useCallback } from "react";

export const Command = ({ inputRef }) => {
  const { closeWindow } = useActiveWindow();

  const {
    currentCommand,
    updateCurrentCommand,
    addConsoleLine,
    executeCommand,
  } = useConsole();

  const addLine = useCallback(() => {
    if (currentCommand !== ``) {
      addConsoleLine(`] ${currentCommand}`);
      executeCommand(currentCommand);
      updateCurrentCommand(``);
    }
  }, [currentCommand]);

  const updateCommand = (e) => {
    const key = e.target.value[e.target.value.length - 1];
    if (key === `\``) {
      closeWindow();
    } else {
      updateCurrentCommand(e.target.value);
    }
  };

  const applyCommand = (e) => {
    if (e.key === `Enter`) {
      e.preventDefault();
      addLine();
    }
  };

  return (
    <div className="command">
      <Input
        type="search"
        value={currentCommand}
        menu={`command`}
        className={`command-input`}
        onChange={updateCommand}
        onKeyDown={applyCommand}
        nodeRef={inputRef}
      />
      <Button
        title={`Submit`}
        style={{ marginLeft: `12px`, marginRight: `7px` }}
        onClick={() => addLine()}
      />
    </div>
  );
};
