import { useSelector } from "react-redux";
import { useScrollBottom } from "../../hooks/useScrollBottom";
export const Logs = () => {
  const lines = useSelector((state) => state.window.consoleLines);

  const consoleLogsRef = useScrollBottom(lines);

  return (
    <div className={`console-logs`} ref={consoleLogsRef}>
      {lines.map((line, index) => {
        const { text, options } = line;
        return (
          <p
            key={index}
            className={`console-line`}
            style={{ color: options.color || `#BEB6A3` }}
          >
            {text}
          </p>
        );
      })}
    </div>
  );
};
