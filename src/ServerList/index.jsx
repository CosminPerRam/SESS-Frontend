import {Table} from '@table-library/react-table-library/table';
import {ServerListHeader} from "./header";
import {ServerListBody} from "./body";
import {theme} from "./theme";
import './styles.scss'
import {useTheme} from "@emotion/react";

const DATA = [
    {
        id: '0',
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
        id: '1',
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
];

export const ServerList = () => {
    return (<div className={'ServerList'}>
        <Table data={{nodes: DATA}} theme={theme}>
            {(tableList) => (
              <>
                  <ServerListHeader amount={1457} blacklistedAmount={0}/>
                  <ServerListBody tableList={tableList}/>
              </>
            )}
        </Table>
    </div>);
};
