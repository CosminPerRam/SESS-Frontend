import {useConsoleLines} from "../../hooks/use-console-lines";
export const Logs = () => {
  const { lines } = useConsoleLines();

  return (
    <div className={'ConsoleLogs'}>
      { lines.map(line => <p key={line} className={'ConsoleLine'} style={{color: line.color}}>{line.text}</p>) }
    </div>
  )
}
