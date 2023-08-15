export const TabButton = ({ title, activateTab, activeTabs, tabNumber }) => {
  return (
    <button
      className='tab-button'
      onClick={() => activateTab(tabNumber)}
      style={
        activeTabs[tabNumber]
          ? {
              color: "$buttonTextLight",
              border: "1px solid $border",
              borderBottom: "none",
              height: "27px",
            }
          : null
      }
    >
      {title}
    </button>
  );
};
