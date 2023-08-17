import { TabButton } from "./TabButton";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/layout/slice";

export const NavBar = () => {
  const tabs = [
    "Internet",
    "Favorites",
    "History",
    "Spectate",
    "Lan",
    "Friends",
    "Blacklisted Servers",
  ];

  const activeTab = useSelector((state) => state.layout.activeTab);
  const dispatch = useDispatch();
  return (
    <div className='nav-bar'>
      <div className='nav-buttons'>
        {tabs.map((tab, index) => (
          <TabButton
            title={tab}
            activeTab={activeTab[index]}
            onClick={() => dispatch(setActiveTab(index))}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
