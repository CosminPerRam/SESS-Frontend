import { useSelector } from "react-redux";

export const Logs = () => {
  const lines = useSelector((state) => state.window.consoleLines);
  return (
    <div className={`console-logs`}>
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
