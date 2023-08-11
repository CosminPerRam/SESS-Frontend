import {DropDown} from "../../common/DropDown";
import {VerticalDivider} from "../../common/VerticalDivider";
import {TopInput} from "../../common/TopInput";
import {Button} from "../../common/Button";
import {HorizontalDivider} from "../../common/HorizontalDivider";
import {useDispatch, useSelector} from "react-redux";
import {setInputMap, setInputServer} from "../../redux/contextMenu/slice";

export const Top = () => {
    const workshop = ['<All>', 'Workshop maps', 'Subscribed'];
    const tags = ['include', 'do not include'];
    const dispatch = useDispatch();

    const inputServer = useSelector((state) => state.contextMenu.inputServer);
    const handleInputServer = event =>
    {
        dispatch(setInputServer(event.target.value));
        console.log(event.target.value);
    }
    return (
        <div className='top'>
            <div className='top-settings'>
                <DropDown label={'Workshop'} options={workshop} />
                <VerticalDivider />
                <DropDown label={'Tags'} options={tags} />
                <TopInput value={inputServer} handleInput={handleInputServer} menu={"serverInput"}/>
                <Button title={'Add common tags...'} style={{minWidth: '144px'}}/>
            </div>
            <HorizontalDivider />
        </div>
    )
}