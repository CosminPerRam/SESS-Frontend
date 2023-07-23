
import {Checkboxes} from "./Checkboxes";
import {DropDown} from "../../../common/DropDown";
import {Input} from "../../../common/Input";

export const Middle = () => {
    const game = ['Team Fortress 2'];
    const latency = ['<All>', '< 50', '< 100', '< 150', '< 250', '< 350', '< 600'];
    const location = ['<All>', 'US - East', 'US - West', 'South America', 'Europe', 'Asia', 'Australia', 'Middle East', 'Africa'];
    const antiCheat = ['<All>', 'Secure', 'Not Secure'];
    return (
        <div className='middle'>
            <DropDown label={'Game'} options={game} style={{width: '162px'}}/>
            <Input title={'Map'} style={{width: '162px'}}/>
            <Input title={'Map player count'} style={{width: '62px'}}/>
            <DropDown label={'Latency'} options={latency} />
            <DropDown label={'Location'} options={location} />
            <DropDown label={'Anti-cheat'} options={antiCheat} />
            <Checkboxes />
        </div>
    )
}