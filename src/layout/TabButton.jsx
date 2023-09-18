export const TabButton = ({ title, onClick, activeTab, onContextMenu }) => {
  return (
    <button
      className="tab-button"
      onClick={() => onClick()}
      style={
        activeTab
          ? {
              color: `$buttonTextLight`,
              border: `1px solid $border`,
              borderBottom: `none`,
              height: `27px`,
            }
          : null
      }
      onContextMenu={onContextMenu}
    >
      {title}
    </button>
  );
};
