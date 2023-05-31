import { Checkbox } from "./Checkbox"
import { Button } from "./Button"
import { Label } from "./Label"
import { Buttons } from "./Buttons"
export const Bottom = () => {
    return (
        <div class='Bottom'>
            <Checkbox title={'Simplified List'} />
            <Button title={'Filters'} style={{width: '106px', marginLeft: '32px', color:'$buttonText'}}/>
            <Label text={'Team Fortress 2;Team Fortress 2;Team Fortress 2;Team Fortress 2;'}/>
            <Buttons />
        </div>
    )
}