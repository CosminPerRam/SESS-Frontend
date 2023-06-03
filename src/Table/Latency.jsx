import { Tags } from "./Tags"

export const Latency = ({data}) => {
    return (
        <div class='Layer' style={{ minWidth: '150px' }}>
            <div class='texts'>
                <div class='heading'>Latency</div>
                {data.map(element => <div class='text'>{element.latency}</div>)}
            </div>
            <Tags />
        </div>
    )
}