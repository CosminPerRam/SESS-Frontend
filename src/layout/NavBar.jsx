import {TabButton} from "../common/TabButton";

export const NavBar = () => {
    return (
        <div className='NavBar' >
            <div className='NavButtons'>
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