export const Button = ({ title, style, id, onClick }) => {
  return (
    <button id={id} className="button" style={style} onClick={onClick}>
      {title}
    </button>
  );
};
