import { TabButton } from "./TabButton"
export const NavBar = () => {
    return (
        <div class='NavBar' >
            <div class='NavButtons'>
            <TabButton title={'Internet'} />
            <TabButton title={'Favorites'} />
            <TabButton title={'History'} />
            <TabButton title={'Spectate'} />
            <TabButton title={'Lan'} />
            <TabButton title={'Friends'} />
            <TabButton title={'Blacklisted Servers'} />
            </div>
            
        </div>
    )
}