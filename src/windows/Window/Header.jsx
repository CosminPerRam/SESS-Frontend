import { Close } from "../../assets/icons/close";

export const Header = ({ onCloseClick, title }) => {
  return (
    <div className="window-header">
      <span className={`window-header-title`}>{title}</span>
      <Close onClick={onCloseClick} />
    </div>
  );
};
