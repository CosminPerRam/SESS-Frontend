import { useClipboard } from "../hooks/useClipboard";

export const ReadOnlyMenu = ({ top, left, input, nodeRef }) => {
  const { Copy } = useClipboard(input);
  return (
    <div
      className="context-menu"
      style={{ top: top + `px`, left: left + `px` }}
      ref={nodeRef}
    >
      <div className="context-menu-element" onMouseDown={Copy}>
        Copy
      </div>
    </div>
  );
};
