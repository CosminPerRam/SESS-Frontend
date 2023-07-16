import { Settings } from "./Settings"
import { ServerList } from "./ServerList"

export const Content = () => {
    return (
        <div className='Divider'>
            <ServerList />
            <Settings />
        </div>
    )
}
