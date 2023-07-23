
import {Checkbox} from "../../../common/Checkbox";
import {Button} from "../../../common/Button";
import {Label} from "../../../common/Label";
import {ActionButtons} from "./ActionButtons";

export const Bottom = () => {
    return (
        <div className='bottom'>
            <Checkbox title={'Simplified List'} style={{minWidth: '89px'}} />
            <Button title={'Filters'} style={{width: '106px', marginLeft: '32px', color:'$buttonText', minWidth: '106px'}}/>
            <Label text={'Team Fortress 2;Team Fortress 2;Team Fortress 2;Team Fortress 2;'}/>
            <ActionButtons />
        </div>
    )
}