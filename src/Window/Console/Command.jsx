import { Button } from "../../common/Button";
import { Input } from "../../common/Input";
import { useDispatch, useSelector } from "react-redux";
import { setInputCommand } from "../../redux/contextMenu/slice";
import { setConsoleLines } from "../../redux/window/slice";

export const Command = () => {
  const dispatch = useDispatch();

  const inputCommand = useSelector((state) => state.contextMenu.inputCommand);
  const handleInputCommand = (event) => {
    dispatch(setInputCommand(event.target.value));
    console.log(event.target.value);
  };

  const addLine = () => {
    if (inputCommand !== "") {
      dispatch(setConsoleLines(inputCommand));
      dispatch(setInputCommand(""));
    }
  };
  const updateCommand = (e) => {
    // fix me todo!
    if (e.key === "Enter") {
      e.preventDefault();
      addLine();
    }
  };

  return (
    <div className="command">
      <Input
        type="search"
        value={inputCommand}
        handleInput={handleInputCommand}
        menu={"command"}
        className={"command-input"}
        onKeyDown={updateCommand}
      />
      <Button
        title={"Submit"}
        style={{ marginLeft: "12px", marginRight: "7px" }}
        onClick={() => addLine()}
      />
    </div>
  );
};
