import {ServerListHead} from "./ServerListHead";
import {DataEntry} from "./DataEntry";

const DATA = [
    {
        protocol: 21,
        name: 'This is a server!',
        map: 'ctf_2fort',
        folder: 'tf2',
        game: 'Team Fortress',
        appid: 440,
        players_online: 2,
        players_maximum: 32,
        players_bots: 3,
        has_password: false,
        vac_secured: true,
        supports_replays: false,
        version: "2023.06.03",
        is_mod: false,
    },
    {
        protocol: 21,
        name: 'My private server',
        map: 'cp_orange_x7',
        folder: 'tf2',
        game: 'Team Fortress',
        appid: 440,
        players_online: 1,
        players_maximum: 2,
        players_bots: 0,
        has_password: true,
        vac_secured: true,
        supports_replays: false,
        version: "2023.06.03",
        is_mod: false,
    }
]

export const ServerList = () => {
    return (
        <div className='ServerList' >
            <table className='ServersTable' >
                <ServerListHead />
                {DATA.map(entry => <DataEntry entry={entry} />)}
            </table>
        </div>
    )
}
