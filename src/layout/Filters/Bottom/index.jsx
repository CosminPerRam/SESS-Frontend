
import {Checkbox} from "../../../common/Checkbox";
import {Button} from "../../../common/Button";
import {Label} from "../../../common/Label";
import {ActionButtons} from "./ActionButtons";
import {useSelector} from "react-redux";

export const Bottom = () => {
    const canBeFull = useSelector((state) => state.filters.canBeFull);
    const canBeEmpty= useSelector((state) => state.filters.canBeEmpty);
    const canHavePassword = useSelector((state) => state.filters.canHavePassword);
    const spectatorProxy = useSelector((state) => state.filters.spectatorProxy);
    const runsMap = useSelector((state) => state.filters.runsMap);
    const maxPlayerCount = Number(useSelector((state) => state.localFilters.maxPlayerCount));
    const isSecured = useSelector((state) => state.filters.isSecured);
    const location = useSelector((state) => state.filters.location);
    const latency = useSelector((state) => state.localFilters.latency);
    
    const label = `Team Fortress 2;
    ${isSecured === null ? "" : isSecured ? " secure;" : " not secure;"}
    ${location ? location + ";" : ''}
    ${latency ? " latency " + latency + ";" : ''}
    ${isNaN(maxPlayerCount) || maxPlayerCount === 0 ? '' : ' max players <= ' + maxPlayerCount + ';'}
    ${canBeFull ? '' : ' is not full;'}
    ${canBeEmpty ? '' : ' is not empty;'}
    ${canHavePassword ? '' : ' has no password;'}
    ${spectatorProxy ? ' supports replays;' : ''}
    ${runsMap}`;
    
    return <div className='bottom'>
            <Checkbox title={'Simplified List'} />
            <Button title={'Filters'} id={'filters'} style={{width: '106px', marginLeft: '32px', color:'$buttonText', minWidth: '106px'}}/>
            <Label name={label}/>
            <ActionButtons />
        </div>
}