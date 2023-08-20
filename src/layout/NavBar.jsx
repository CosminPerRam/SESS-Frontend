import { TabButton } from "./TabButton";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/layout/slice";

export const NavBar = () => {
  const tabs = [
    // TODO! move this to core and make it const and also use Internet in slice
    `Internet`,
    `Favorites`,
    `History`,
    `Spectate`,
    `Lan`,
    `Friends`,
    `Blacklisted Servers`,
  ];

  const activeTab = useSelector((state) => state.layout.activeTab);
  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <div className="nav-buttons">
        {tabs.map((tab) => (
          <TabButton
            title={tab}
            activeTab={tab === activeTab}
            onClick={() => dispatch(setActiveTab(tab))}
            key={tab}
          />
        ))}
      </div>
    </div>
  );
};
