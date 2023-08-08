import {useDispatch, useSelector} from "react-redux";
import {setActiveMenu, setPopupCoords} from "../redux/contextMenu/slice";

export const Input = ({title, style, value, handleInput, menu}) => {
    const dispatch = useDispatch();
    const handleSetActiveMenu = (menu, popupCoords, e) => {
        e.preventDefault();
        dispatch(setActiveMenu(menu));
        dispatch(setPopupCoords(popupCoords));
    };

    return <div className='form-element' onContextMenu={(e) => {handleSetActiveMenu(menu, {x: e.pageX, y: e.pageY}, e)}} >
       {title}
       <input type='search' className='input' style={style} value={value} onChange={(e) => handleInput(e)}/>
    </div>
}