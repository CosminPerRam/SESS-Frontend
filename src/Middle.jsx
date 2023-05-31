import { DropDown } from "./DropDown"
import { Input } from "./Input"
import { Checkboxes } from "./Checkboxes";
export const Middle = () => {
    const game = ['Team Fortress 2'];
    const latency = ['<All>', '< 50', '< 100', '< 150', '< 250', '< 350', '< 600'];
    const location = ['<All>', 'US - East', 'US - West', 'South America', 'Europe', 'Asia', 'Australia', 'Middle East', 'Africa'];
    const antiCheat = ['<All>', 'Secure', 'Not Secure'];
    return (
        <div class='Middle'>
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