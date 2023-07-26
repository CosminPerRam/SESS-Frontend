import {Checkbox} from "../../../common/Checkbox";

export const Checkboxes = () => {
    return (
        <form className='checkboxes'>
            <Checkbox title={'Server not full'} />
            <Checkbox title={'Has users playing'} />
            <Checkbox title={'Is not password protected'} />
            <Checkbox title={'Supports replays'} />
        </form>
    )
}