import { Checkbox } from "./Checkbox"
import { Button } from "./Button"
import { Label } from "./Label"
import { Buttons } from "./Buttons"
export const Bottom = () => {
    return (
        <div className='Bottom'>
            <Checkbox title={'Simplified List'} style={{minWidth: '89px'}} />
            <Button title={'Filters'} style={{width: '106px', marginLeft: '32px', color:'$buttonText', minWidth: '106px'}}/>
            <Label text={'Team Fortress 2;Team Fortress 2;Team Fortress 2;Team Fortress 2;'}/>
            <Buttons />
        </div>
    )
}