import {useDispatch} from "react-redux";
import {setActiveMenu, setPopupCoords} from "../redux/contextMenu/slice";

export const TopInput = ({value, handleInput}) => {
    const dispatch = useDispatch();
    const handleSetActiveMenu = (menu, popupCoords, e) => {
        e.preventDefault();
        dispatch(setActiveMenu(menu));
        dispatch(setPopupCoords(popupCoords));
    };
    return <input type='search' className='top-input' onContextMenu={(e) => {handleSetActiveMenu("serverInput", {x: e.pageX, y: e.pageY}, e)}} value={value} onChange={handleInput}/>
}