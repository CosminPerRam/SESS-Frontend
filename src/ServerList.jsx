import iconRobotronColumn from './iconRobotronColumn.png'
import iconPasswordColumn from './iconPasswordColumn.png'
import iconReplayColumn from './iconReplayColumn.png'
import { Table } from './Table'

const DATA = [
    {
        protocol: 'i32',
        name: 'Sex',
        map: 'Dust2',
        folder: 'folder2',
        game: 'Counter-Strike',
        appid: 'i32',
        players_online: '7',
        players_maximum: '32',
        players_bots: '5',
        //server_type: Server,
        //environment_type: Environment,
        has_password: true,
        vac_secured: true,
        version: 'Strin',
        //extra_data: Option<ExtraData>,
        is_mod: true,
        //mod_data: Option<ModData>,
        latency: '50'
    },
    {
        protocol: 'i32',
        name: 'Sex2',
        map: 'Dust3',
        folder: 'folder2',
        game: 'Counter-Strike 2',
        appid: 'i32',
        players_online: '8',
        players_maximum: '33',
        players_bots: '6',
        //server_type: Server,
        //environment_type: Environment,
        has_password: true,
        vac_secured: true,
        version: 'Strin',
        //extra_data: Option<ExtraData>,
        is_mod: true,
        //mod_data: Option<ModData>,
        latency: '51'
    },
    {
        protocol: 'i32',
        name: 'Sex3',
        map: 'Dust4',
        folder: 'folder2',
        game: 'Counter-Strike 3',
        appid: 'i32',
        players_online: '9',
        players_maximum: '34',
        players_bots: '7',
        //server_type: Server,
        //environment_type: Environment,
        has_password: true,
        vac_secured: true,
        version: 'Strin',
        //extra_data: Option<ExtraData>,
        is_mod: true,
        //mod_data: Option<ModData>,
        latency: '52'
    }
]

export const ServerList = () => {
    return (
        <div class='ServerList' >
            <div class='head'></div>
            <Table />
        </div>
    )
}