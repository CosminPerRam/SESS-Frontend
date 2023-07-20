import {createContext, useState} from "react";

export const ConsoleContext = createContext({
  lines: [],
  setLines: (line) => {}
});

export const ContextProvider = ({children}) => {
  const [lines, setLines] = useState([]);

  const context = {
    lines,
    setLines
  }

  return (
    <ConsoleContext.Provider value={context}>
      {children}
    </ConsoleContext.Provider>
  )
}
