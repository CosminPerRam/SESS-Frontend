import { Players } from "./Players"

export const Game = () => {
    return (
        <div class='Layer' style={{ minWidth: '350px' }}>
            <div class='texts'>
                <div class='heading'>Game</div>
                <div class='text'>Servers</div>
                <div class='text'>Servers</div>
            </div>
            <Players />
        </div>
    )
}