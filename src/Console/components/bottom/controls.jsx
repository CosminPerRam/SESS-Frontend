import {Button} from "../../../Button";
import {useAddConsoleLine} from "../../use-add-console-line";
import {useCallback, useState} from "react";

export const Controls = () => {
  const addLine = useAddConsoleLine();
  const [command, setCommand] = useState('');

  const onClick = useCallback(() => {
    addLine(command)
    setCommand('');
  }, [command]);

  return (
    <div className={'ConsoleControls'}>
      <input type='search' className='CommandInput' value={command} onChange={(e) => setCommand(e.target.value)} />
      <Button title={'Submit'} className={'CommandSubmit'} onClick={() => onClick()} />
    </div>
  )
}
