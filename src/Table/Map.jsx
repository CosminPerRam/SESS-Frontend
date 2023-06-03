import { Latency } from "./Latency"

export const Map = ({data}) => {
    return (
        <div class='Layer' style={{ minWidth: '200px' }}>
            <div class='texts'>
                <div class='heading'>Map</div>
                {data.map(element => <div class='text'>{element.map}</div>)}
            </div>
            <Latency data={data}/>
        </div>
    )
}