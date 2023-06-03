import {Controls} from "./controls";
import {Logs} from "./logs";

export const Bottom = () => {
  return (
    <div className={'ConsoleBottom'}>
      <Logs />
      <Controls />
    </div>
  )
}
