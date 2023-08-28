import { useClipboard } from "../hooks/useClipboard";

export const InputMenu = ({ top, left, setInput, input, nodeRef }) => {
  const { Cut, Copy, Paste, pasteDisabled } = useClipboard(input, setInput);

  return (
    <div
      className="context-menu"
      style={{ top: top + `px`, left: left + `px` }}
      ref={nodeRef}
    >
      <div className="context-menu-element" onMouseDown={Cut}>
        Cut
      </div>
      <div className="context-menu-element" onMouseDown={Copy}>
        Copy
      </div>
      <div className="context-menu-element" onMouseDown={Paste}>
        <label style={pasteDisabled ? { color: `#847A68` } : {}}>Paste</label>
      </div>
    </div>
  );
};
