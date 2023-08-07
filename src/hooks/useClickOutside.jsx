import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setActiveMenu, setPopupCoords} from "../redux/contextMenu/slice";

export const useClickOutside = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const handleClickOutside = () => {
            dispatch(setActiveMenu(null));
            dispatch(setPopupCoords(null));
        };
        document.addEventListener("mouseup", handleClickOutside);
        return () => {
            document.removeEventListener("mouseup", handleClickOutside);
        };
    }, [dispatch]);
}
