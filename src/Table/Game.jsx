import { Players } from "./Players"

export const Game = ({data}) => {
    return (
        <div class='Layer' style={{ minWidth: '350px' }}>
            <div class='texts'>
                <div class='heading'>Game</div>
                {data.map(element => <div class='text'>{element.game}</div>)}
            </div>
            <Players data={data}/>
        </div>
    )
}