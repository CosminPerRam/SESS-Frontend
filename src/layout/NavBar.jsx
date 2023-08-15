import { TabButton } from "../common/TabButton";
import { useState } from "react";

export const NavBar = () => {
  const [activeTabs, setActiveTabs] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const activateTab = (tabNumber) => {
    const newActiveTabs = new Array(7).fill(false);
    newActiveTabs[tabNumber] = true;
    setActiveTabs(newActiveTabs);
  };

  return (
    <div className='nav-bar'>
      <div className='nav-buttons'>
        <TabButton
          title={"Internet"}
          activeTabs={activeTabs}
          activateTab={activateTab}
          tabNumber={0}
        />
        <TabButton
          title={"Favorites"}
          activeTabs={activeTabs}
          activateTab={activateTab}
          tabNumber={1}
        />
        <TabButton
          title={"History"}
          activeTabs={activeTabs}
          activateTab={activateTab}
          tabNumber={2}
        />
        <TabButton
          title={"Spectate"}
          activeTabs={activeTabs}
          activateTab={activateTab}
          tabNumber={3}
        />
        <TabButton
          title={"Lan"}
          activeTabs={activeTabs}
          activateTab={activateTab}
          tabNumber={4}
        />
        <TabButton
          title={"Friends"}
          activeTabs={activeTabs}
          activateTab={activateTab}
          tabNumber={5}
        />
        <TabButton
          title={"Blacklisted Servers"}
          activeTabs={activeTabs}
          activateTab={activateTab}
          tabNumber={6}
        />
      </div>
    </div>
  );
};
