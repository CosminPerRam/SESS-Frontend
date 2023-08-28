import { isFirefox } from "../core/is-firefox";
import { useDispatch } from "react-redux";

export const useClipboard = (input, setInput) => {
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

  return { Cut, Copy, Paste, pasteDisabled };
};
