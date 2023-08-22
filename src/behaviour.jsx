import { useEffect } from "react";
import { useConsole } from "./hooks/useConsole";
import { colors } from "./core/colors";
import { isFirefox } from "./core/is-firefox";

export const Behaviour = () => {
  const firefox = isFirefox();
  const { addConsoleLine } = useConsole();

  useEffect(() => {
    if (firefox) {
      addConsoleLine(
        `The 'Paste' action on text inputs is not available on Firefox.`,
        { color: colors.console.error },
      );
    }
  }, [firefox, addConsoleLine]);

  return <></>;
};
