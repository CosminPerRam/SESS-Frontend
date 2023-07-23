import {useConsoleLines} from "../../hooks/use-console-lines";
export const Logs = () => {
  const { lines } = useConsoleLines();

  return (
    <div className={'console-logs'}>
      { lines.map(line => <p key={line} className={'console-line'} style={{color: line.color}}>{line.text}</p>) }
    </div>
  )
}
