import { Button } from "../../../common/Button";
import {useCallback, useState} from "react";
import {useAddConsoleLine} from "../../hooks/use-add-console-line";

export const Controls = () => {
  const addLine = useAddConsoleLine();
  const [command, setCommand] = useState('');

  const onClick = useCallback(() => {
    addLine({ text: `Input: ${command}`, color: '#00ff00' })
    setCommand('');
  }, [addLine, setCommand, command]);

  const updateCommand = useCallback((e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick();
    }
  }, [onClick]);

  return (
    <div className='console-controls'>
      <input type='search' className='command-input' value={command} onKeyDown={updateCommand} onChange={(e) => setCommand(e.target.value)} />
      <Button title={'Submit'} className='command-submit' onClick={() => onClick()} />
    </div>
  )
}
