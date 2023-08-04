import {Table} from '@table-library/react-table-library/table';
import { useRowSelect } from "@table-library/react-table-library/select";
import { theme } from "./theme";
import { Header } from './Header';
import { Body } from './Body';
import {useState} from "react";
import {useClickHook} from "../../hooks/useClickHook";
import {useSelector} from "react-redux";

const DATA = [
    {
        id: '0',
        protocol: 21,
        name: 'This is a server!',
        map: 'ctf_2fort',
        folder: 'tf2',
        game: 'Team Fortress',
        appid: 440,
        playersOnline: 0,
        playersMaximum: 32,
        playersBots: 0,
        players: [],
        hasPassword: false,
        vacSecured: true,
        supportsReplays: false,
        version: "2023.06.03",
        isMod: false,
    },
    {
        id: '1',
        protocol: 21,
        name: 'My private server',
        map: 'cp_orange_x7',
        folder: 'tf2',
        game: 'Team Fortress',
        appid: 440,
        playersOnline: 1,
        playersMaximum: 2,
        playersBots: 0,
        players: [
            {
                name: "Caca",
                score: 23,
                duration: 1200
            }
        ],
        hasPassword: true,
        vacSecured: true,
        supportsReplays: false,
        version: "2023.06.03",
        isMod: false,
    }
];

export const ServerList = () => {
    const data = { nodes: DATA };

    const select = useRowSelect(data, {
        onChange: (action, state) => {
            console.log(action, state);
        }
    });

    const { popupPoints, setPopupPoints } = useClickHook();
    const { popupPoints: headerPoints, setPopupPoints: setHeaderPoints } = useClickHook();
    
    const [infoHidden, setInfoHidden] = useState(true);
    const [item, setItem] = useState(null);

    const [hiddenColumns, setHiddenColumns] = useState({
        Password: false,
        Secure: false,
        Replay: false,
        Servers: false,
        ["IP Address"]: true,
        Game: false,
        Players: false,
        Bots: false,
        Map: false,
        Latency: false,
        Tags: false,
    });
    
    return <div className={'server-list'}>
        <Table data={data} theme={theme("repeat(3, 16px) minmax(24px, 1fr) minmax(100px, 1fr) 56px 40px minmax(100px, 1fr) 56px minmax(80px, 1fr)", "0px", "2px")} select={select} layout={{custom: true, fixedHeader: true}}>
            {(tableList) => (
              <>
                  <Header hiddenColumns={hiddenColumns} amount={1457} blacklistedAmount={0} setPoints={setHeaderPoints} />
                  <Body hiddenColumns={hiddenColumns} tableList={tableList} setPoints={setPopupPoints} setItem={setItem}/>
              </>
            )}
        </Table>
    </div>
};
