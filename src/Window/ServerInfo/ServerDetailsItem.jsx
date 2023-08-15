export const ServerDetailsItem = ({ name, value, onContextMenu }) => {
  return (
    <div className="server-detail-row">
      <div className="server-detail-name">{name}:</div>
      <div className="server-detail-value" onContextMenu={onContextMenu}>
        {value}
      </div>
    </div>
  );
};
