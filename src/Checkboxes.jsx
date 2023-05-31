import { Checkbox } from "./Checkbox"

export const Checkboxes = () => {
    return (
        <div class='Checkboxes'>
            <Checkbox title={'Server not full'} />
            <Checkbox title={'Has users playing'} />
            <Checkbox title={'Is not password protected'} />
            <Checkbox title={'Supports replays'} />
        </div>
    )
}