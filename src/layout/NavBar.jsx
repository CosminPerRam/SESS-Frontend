import { TabButton } from "./TabButton";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/layout/slice";
import { useActiveMenu } from "../hooks/useActiveMenu";
import { setAddServerTo } from "../redux/window/slice";

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
  const { openMenu } = useActiveMenu();
  return (
    <div className="nav-bar">
      <div className="nav-buttons">
        {tabs.map((tab) =>
          tab === `Favorites` ? (
            <TabButton
              title={tab}
              activeTab={tab === activeTab}
              onClick={() => dispatch(setActiveTab(tab))}
              onContextMenu={(e) => {
                openMenu(`addServer`)(e);
                dispatch(setAddServerTo(`favorites`));
              }}
              key={tab}
            />
          ) : tab === `Blacklisted Servers` ? (
            <TabButton
              title={tab}
              activeTab={tab === activeTab}
              onClick={() => dispatch(setActiveTab(tab))}
              onContextMenu={(e) => {
                openMenu(`addServer`)(e);
                dispatch(setAddServerTo(`blacklist`));
              }}
              key={tab}
            />
          ) : (
            <TabButton
              title={tab}
              activeTab={tab === activeTab}
              onClick={() => dispatch(setActiveTab(tab))}
              key={tab}
            />
          ),
        )}
      </div>
    </div>
  );
};
