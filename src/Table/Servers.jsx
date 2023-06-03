import { Game } from "./Game"

export const Servers = ({data}) => {
    return (
        <div class='Layer first' style={{ minWidth: '400px' }}>
            <div class='texts'>
                <div class='heading'>Servers</div>
                {data.map(element => <div class='text'>{element.name}</div>)}
            </div>
            <Game data={data}/>
        </div>
    )
}