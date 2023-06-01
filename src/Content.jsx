import { Settings } from "./Settings"
import { ServerList } from "./ServerList"
export const Content = () => {
    return (
        <div class='Divider'>
            <ServerList />
            <Settings />
        </div>
    )
}