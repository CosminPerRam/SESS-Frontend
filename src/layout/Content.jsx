import {ServerList} from "./ServerList";
import {Filters} from "./Filters";

export const Content = () => {
    return <div className='Content'>
        <ServerList />
        <Filters />
    </div>
}