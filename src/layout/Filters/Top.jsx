import {DropDown} from "../../common/DropDown";
import {VerticalDivider} from "../../common/VerticalDivider";
import {TopInput} from "../../common/TopInput";
import {Button} from "../../common/Button";
export const Top = () => {
    const workshop = ['<All>', 'Workshop maps', 'Subscribed'];
    const tags = ['include', 'do not include'];
    return (
        <div className='top'>
            <div className='top-settings'>
                <DropDown label={'Workshop'} options={workshop} />
                <VerticalDivider />
                <DropDown label={'Tags'} options={tags} />
                <TopInput />
                <Button title={'Add common tags...'} style={{minWidth: '144px'}}/>
            </div>
            <hr className='horizontal-divider' />
        </div>
    )
}