import { useDispatch } from "react-redux";
import { isFirefox } from "../core/is-firefox";

export const InputMenu = ({ top, left, setInput, input, nodeRef }) => {
  const pasteDisabled = isFirefox();

  const dispatch = useDispatch();
  const Cut = () => {
    navigator.clipboard.writeText(input).then(() => dispatch(setInput(``)));
  };

  const Copy = () => {
    navigator.clipboard.writeText(input).then(() => {});
  };

  const Paste = (e) => {
    if (!pasteDisabled) {
      navigator.clipboard
        .readText()
        .then((text) => dispatch(setInput(input + text)));
    } else {
      e.stopPropagation();
    }
  };

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
