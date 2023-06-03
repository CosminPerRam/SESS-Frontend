import { Bots } from "./Bots"

export const Players = ({data}) => {
    return (
        <div class='Layer' style={{ minWidth: '300px' }}>
            <div class='texts'>
                <div class='heading'>Players</div>
                {data.map(element => <div class='text'>{element.players_online}/{element.players_maximum}</div>)}
            </div>
            <Bots data={data}/>
        </div>
    )
}