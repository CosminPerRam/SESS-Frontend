import {ServerList} from "./ServerList";
import {Filters} from "./Filters";

export const Content = () => {
    return <div className='Divider'>
        <ServerList />
        <Filters />
    </div>
}