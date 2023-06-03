import { Map } from "./Map"
export const Bots = ({data}) => {
    return (
        <div class='Layer' style={{ minWidth: '250px' }}>
            <div class='texts'>
                <div class='heading'>Bots</div>
                {data.map(element => <div class='text'>{element.players_bots}</div>)}
            </div>
            <Map data={data}/>
        </div>
    )
}