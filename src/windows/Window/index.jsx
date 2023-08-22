import Draggable from "react-draggable";
import { Header } from "./Header";
import "../windows.scss";
import { useActiveWindow } from "../../hooks/useActiveWindow";

export const Window = ({ children, title, nodeRef, className }) => {
  const { closeWindow } = useActiveWindow();

  return (
    <Draggable nodeRef={nodeRef} defaultPosition={{ x: 320, y: 110 }}>
      <div className={`window-container ${className}`} ref={nodeRef}>
        <Header onCloseClick={closeWindow} title={title} />
        {children}
      </div>
    </Draggable>
  );
};
