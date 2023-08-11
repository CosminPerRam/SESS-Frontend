import {useSelector} from "react-redux";

export const Logs = () => {
  const lines = useSelector((state) => state.window.consoleLines);
  return <div className={'console-logs'}>
    {lines.map(line => <p key={line} className={'console-line'}>{line}</p>)}
  </div>
}
