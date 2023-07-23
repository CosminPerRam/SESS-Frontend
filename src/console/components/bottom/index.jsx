import {Controls} from "./controls";
import {Logs} from "./logs";

export const Bottom = () => {
  return (
    <div className='console-bottom'>
      <Logs />
      <Controls />
    </div>
  )
}
