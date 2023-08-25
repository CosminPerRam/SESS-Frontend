import { useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { Console } from "../windows/Console";
import { useClickOutside } from "../hooks/useClickOutside";
import { ServerInfo } from "../windows/ServerInfo";
import { useActiveWindow } from "../hooks/useActiveWindow";
import { windows } from "../core/windows";

export const RenderActiveWindow = () => {
  const dispatch = useDispatch();
  const { activeWindow, openWindow, closeWindow } = useActiveWindow();
  const nodeRef = useRef(null);

  useClickOutside(nodeRef);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyUpEvent = (e) => {
      if (e.key === "`" && e.target.tagName !== `INPUT`) {
        if (activeWindow === windows.console) {
          closeWindow();
        } else {
          openWindow(windows.console);
        }
      }
    };

    window.addEventListener(`keypress`, handleKeyUpEvent);
    return () => {
      window.removeEventListener(`keypress`, handleKeyUpEvent);
    };
  }, [dispatch]);

  if (activeWindow === windows.console) {
    return <Console nodeRef={nodeRef} inputRef={inputRef} />;
  } else if (activeWindow === windows.serverInfo) {
    return <ServerInfo nodeRef={nodeRef} />;
  }

  return null;
};
