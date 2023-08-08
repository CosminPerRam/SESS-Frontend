
import {Checkboxes} from "./Checkboxes";
import {DropDown} from "../../../common/DropDown";
import {Input} from "../../../common/Input";
import {useDispatch, useSelector} from "react-redux";
import {setInputMap, setInputMapPlayerCount} from "../../../redux/contextMenu/slice";

export const Middle = () => {
    const game = ['Team Fortress 2'];
    const latency = ['<All>', '< 50', '< 100', '< 150', '< 250', '< 350', '< 600'];
    const location = ['<All>', 'US - East', 'US - West', 'South America', 'Europe', 'Asia', 'Australia', 'Middle East', 'Africa'];
    const antiCheat = ['<All>', 'Secure', 'Not Secure'];

    const dispatch = useDispatch();
    
    const inputMap = useSelector((state) => state.contextMenu.inputMap);
    const handleInputMap = event =>
    {
        dispatch(setInputMap(event.target.value));
        console.log(event.target.value);
    }

    const inputMapPlayerCount = useSelector((state) => state.contextMenu.inputMapPlayerCount);
    const handleInputMapPlayerCount = event =>
    {
        dispatch(setInputMapPlayerCount(event.target.value));
        console.log(event.target.value);
    }
    
    return (
        <div className='middle'>
            <DropDown label={'Game'} options={game} style={{width: '162px'}}/>
            <Input title={'Map'} style={{width: '162px'}} className={"input"} value={inputMap} handleInput={handleInputMap} menu={"map"}/>
            <Input title={'Map player count'} style={{width: '62px'}} className={"input"} value={inputMapPlayerCount} handleInput={handleInputMapPlayerCount} menu={"mapPlayerCount"}/>
            <DropDown label={'Latency'} options={latency} />
            <DropDown label={'Location'} options={location} />
            <DropDown label={'Anti-cheat'} options={antiCheat} />
            <Checkboxes />
        </div>
    )
}