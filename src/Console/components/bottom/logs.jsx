import {useConsoleLines} from "../../use-console-lines";

export const Logs = () => {
  const { lines } = useConsoleLines();

  return (
    <div className={'ConsoleLogs'}>
      { lines.map(line => <p key={line}>{line}</p>) }
    </div>
  )
}
