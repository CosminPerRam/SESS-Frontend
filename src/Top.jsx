import { DropDown } from "./DropDown"
import { VerticalDivider } from "./VerticalDivider";
import { Input } from "./Input";
import { SettingsButton } from "./SettingsButton";

export const Top = () => {
    const workshop = ['<All>', 'Workshop maps', 'Subscribed'];
    const tags = ['include', 'do not include'];
    return (
        <div class='Top'>
            <div class='TopSettings'>
                <DropDown label={'Workshop'} options={workshop} />
                <VerticalDivider />
                <DropDown label={'Tags'} options={tags} />
                <Input cssClass={'TopInput'} />
                <SettingsButton title={'Add common tags...'} />
            </div>
            <hr class='HorizontalDivider' />
        </div>
    )
}