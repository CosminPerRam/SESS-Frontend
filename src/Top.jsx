import { DropDown } from "./DropDown"
import { VerticalDivider } from "./VerticalDivider";
import { TopInput } from "./TopInput";
import { Button } from "./Button";

export const Top = () => {
    const workshop = ['<All>', 'Workshop maps', 'Subscribed'];
    const tags = ['include', 'do not include'];
    return (
        <div class='Top'>
            <div class='TopSettings'>
                <DropDown label={'Workshop'} options={workshop} />
                <VerticalDivider />
                <DropDown label={'Tags'} options={tags} />
                <TopInput />
                <Button title={'Add common tags...'} style={{minWidth: '144px'}}/>
            </div>
            <hr class='HorizontalDivider' />
        </div>
    )
}